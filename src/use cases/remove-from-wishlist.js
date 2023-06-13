//Services
const userDbService = require("../services/users-db-service");

module.exports = async (currentUserId, itemId) => {


    //check item in whislist

    const wishList = await userDbService.getWishList(currentUserId); 


    // whislist is an array , i need to loop to check of itemid.

console.log(wishList);

    // remove item to whislist

    await userDbService.removeItemWhised(itemId);

};