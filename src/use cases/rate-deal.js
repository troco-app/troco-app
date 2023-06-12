const { generateUUID } = require("../services/crypto-services");
const dealDbService = require("../services/deals-db-service");
const { getUsersById } = require("../services/users-db-service")
const sendDealRating = require("../use cases/send-rating-email");


module.exports = async (currentUserId, dealId, payload) => {

//take the deal data
   
    const deal = await dealDbService.getDealById(dealId);

//check current user can rate the deal(is in the deal and not reated yet)

    if (deal.seller_id !== currentUserId && deal.buyer_id !== currentUserId) {
        throw new Error("You are not authorized to rate this deal");
    };

    const dealRates = await dealDbService.getDealRates(dealId, currentUserId);
console.log(dealRates);

    if (dealRates.length !== 0) {
    throw new Error("You haven't rated this deal yet");
    };

//check the deal has been accepted and the exchange date has passed

if (deal.status !== 'accepted') {
    throw new Error("You can only rate a deal that is accepted");
    }

    const exchangeConditions = dealDbService.getDealExchangeConditions(dealId);
    const currentDate = new Date();

    if (exchangeConditions.exchange_date_time > currentDate) {
    throw new Error("You can only rate a deal after the exchange date");
    }

//Create Object with the rating

  const newRating = {
    id: generateUUID(),
    deal_id: dealId,
    userid: currentUserId,
    rating: payload.rating,
    rating_comment: payload.rating_comment,
    };


    await dealDbService.storeRating(newRating);

    //Check who is the "rator" and send an email to the counterpart

    let ratorUserId = currentUserId;
    let ratedUserId = deal.buyer_id;


    if (currentUserId == deal.seller_id) {
        ratorUserId = deal.seller_id;
        ratedUserId = deal.buyer_id;
    } else {
        ratorUserId = deal.buyer_id;
        ratedUserId = deal.seller_id;
    }


    const ratorUser = await getUsersById(ratorUserId)
    const ratedUser = await getUsersById(ratedUserId)
    const rate = payload.rating; 
    const comment = payload.rating_comment

    await sendDealRating(ratedUser, dealId, ratorUser, rate, comment);

};
