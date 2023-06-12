//Services
const { generateUUID } = require("../services/crypto-services");
const itemDbService = require("../services/items-db-service")
const dealDbService = require("../services/deals-db-service")  
const sendacceptanceEmail = require("../use cases/send-acceptance-email");
const { getUsersById } = require("../services/users-db-service") 

module.exports = async (currentUserId, dealId, payload) => {
    // Check if the current user is the seller of the deal
    
    const deal = await dealDbService.getDealById(dealId);

    if (deal.seller_id !== currentUserId) {
        throw new Error("You are not authorized to accept this deal");
    }

    // Change the deal status to 'accepted'
    await dealDbService.updateDealStatus(dealId, 'accepted');

    // Get items involved in the deal
    const dealItems = await dealDbService.getDealItems(dealId);
    
    console.log(dealItems);
    // Change the item status to 'sold'
    const itemIds = dealItems.map(item => item.item_id);
    console.log(itemIds);
    await itemDbService.markItemsSold(itemIds); 

    for (const id of itemIds) {
        await itemDbService.updateItemStatus(id, 'sold');
    }

    // Create an entry in the deals_exchange_conditions table
    const exchangeCondition = {
        id: generateUUID(),
        deal_id: dealId,
        street: payload.street,
        city: payload.city,
        state: payload.state,
        country: payload.country,
        postal_code: payload.postal_code,
        exchange_date_time: payload.exchange_date_time
    };
    await dealDbService.createDealExchangeCondition(exchangeCondition);

    const buyerUser = await getUsersById(deal.buyer_id)
    const sellerUser = await getUsersById(deal.seller_id)
    const exchangeConditions = payload;

    await sendacceptanceEmail(buyerUser, sellerUser, exchangeConditions);

    return { success: true, dealId };
};
