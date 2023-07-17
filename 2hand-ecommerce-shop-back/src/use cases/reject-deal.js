//Services
const { generateUUID } = require("../services/crypto-services");
const itemDbService = require("../services/items-db-service");
const dealDbService = require("../services/deals-db-service");
const { getUsersById } = require("../services/users-db-service");
const sendRejectionEmail = require("../use cases/send-rejection-email");

module.exports = async (currentUserId, dealId, payload) => {
  // Check if the current user is the seller of the deal
  const deal = await dealDbService.getDealById(dealId);
  if (deal.seller_id !== currentUserId && deal.buyer_id !== currentUserId) {
    throw new Error("You are not authorized to reject this deal");
  }

  // Check the deal status is pending

  if (deal.status !== "pending") {
    throw new Error("Deals need to be pending to be rejected");
  }

  // Change the deal status to 'rejected'
  await dealDbService.updateDealStatus(dealId, "rejected");

  // Get items involved in the deal
  const dealItems = await dealDbService.getDealItems(dealId);

  // Change the item status to 'available'
  const itemIds = dealItems.map((item) => item.item_id);
  for (const id of itemIds) {
    await itemDbService.updateItemStatus(id, "available");
  }

  // store the rejection

  const rejection = {
    id: generateUUID(),
    deal_id: dealId,
    user_id: currentUserId,
    rejection_comment: payload.rejection_comment,
  };

  await dealDbService.storeDealRejection(rejection);

  //Check who is the rejecter and send an email to the counterpart

  let rejectordUserId = currentUserId;
  let rejectedUserId = deal.buyer_id;

  if (currentUserId == deal.seller_id) {
    rejectordUserId = deal.seller_id;
    rejectedUserId = deal.buyer_id;
  } else {
    rejectordUserId = deal.buyer_id;
    rejectedUserId = deal.seller_id;
  }

  const rejectedUser = await getUsersById(rejectedUserId);
  const rejectordUser = await getUsersById(rejectordUserId);
  const comment = payload.rejection_comment;

  console.log(rejectordUser);

  await sendRejectionEmail(rejectedUser, rejectordUser, dealId, comment);

  return { success: true, dealId };
};
