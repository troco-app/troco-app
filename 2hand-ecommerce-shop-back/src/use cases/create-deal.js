//Services
const { generateUUID } = require("../services/crypto-services");
const itemDbService = require("../services/items-db-service");
const dealDbService = require("../services/deals-db-service");
const sendOfferEmail = require("../use cases/send-Offer-email");
const { getUsersById } = require("../services/users-db-service");

module.exports = async (currentUserId, payload) => {
  // Validate data
  const { buyer_id, seller_id, offered_items, requested_items } = payload;

  if (currentUserId !== buyer_id) {
    throw new Error("Current user not allowed to do tjis offer");
  }

  if (
    !buyer_id ||
    !seller_id ||
    !Array.isArray(offered_items) ||
    !Array.isArray(requested_items) ||
    (offered_items.length === 0 && requested_items.length === 0)
  ) {
    throw new Error("Invalid deal data");
  }

  // Check if items are available and belong to the correct user
  const allItems = offered_items.concat(requested_items);
  const itemDetails = await Promise.all(
    allItems.map((item_id) => itemDbService.getItemById(item_id))
  );
  console.log(itemDetails);
  if (
    itemDetails.some((item) => item.status !== "available" || item.is_deleted)
  ) {
    throw new Error("Some items are not available");
  }

  // Check that offered items belong to buyer
  const offeredItemsDetails = itemDetails.filter((item) =>
    offered_items.includes(item.id)
  );
  if (
    offeredItemsDetails.some(
      (item) => item.user_id !== buyer_id || item.status !== "available"
    )
  ) {
    throw new Error("Some offered items do not belong to the buyer");
  }

  const requestedItemsDetails = itemDetails.filter((item) =>
    requested_items.includes(item.id)
  );
  if (requestedItemsDetails.some((item) => item.user_id !== seller_id)) {
    throw new Error("Some requested items do not belong to the seller");
  }

  //Create Object with body and headers info for the Deal
  const newDeal = {
    id: generateUUID(),
    buyer_id: currentUserId,
    seller_id: seller_id,
    status: "pending",
  };

  //Save Deal in the DDBB
  await dealDbService.createDeal(newDeal);

  // Store Items to be exhacnged in deal items table
  const deal_id = newDeal.id;

  for (const item_id of offered_items) {
    const dealItem = {
      id: generateUUID(),
      deal_id,
      item_id,
      owner_id: buyer_id,
      type: "offered",
    };
    await dealDbService.createDealItem(dealItem);
    // update the item status to 'reserved'
    await itemDbService.updateItemStatus(item_id, "reserved");
  }

  for (const item_id of requested_items) {
    const dealItem = {
      id: generateUUID(),
      deal_id,
      item_id,
      owner_id: seller_id,
      type: "requested",
    };
    await dealDbService.createDealItem(dealItem);
    // we don't change the satus of the seller itmes so they recieve multiple offers and chose what she prefers.
  }

  // Send email to the seller quit the exchnage offer
  const sellerUser = await getUsersById(seller_id);
  const buyerUser = await getUsersById(buyer_id);

  const offeredString = offeredItemsDetails
    .map(
      (item, index) =>
        `${index + 1}. Name: ${item.name}\nDescription: ${
          item.description
        }\nEstimated Price: €${item.estimated_price}\nItem Condition: ${
          item.item_condition
        }`
    )
    .join("\n\n");

  const requestedString = requestedItemsDetails
    .map(
      (item, index) =>
        `${index + 1}. Name: ${item.name}\nDescription: ${
          item.description
        }\nEstimated Price: €${item.estimated_price}\nItem Condition: ${
          item.item_condition
        }`
    )
    .join("\n\n");

  await sendOfferEmail(sellerUser, buyerUser, requestedString, offeredString);

  return { success: true, deal_id };
};
