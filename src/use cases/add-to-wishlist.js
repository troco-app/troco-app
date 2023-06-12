//Services
const { generateUUID } = require("../services/crypto-services");
const userDbService = require("../services/users-db-service");
const itemDbService  = require("../services/items-db-service");


module.exports = async (currentUserId, itemId) => {


    //check item exist

    const item = await itemDbService.getItemById(itemId)

    if (item.length === 0) {
        throw new Error("this item does not exist");
        };


    //check item not in whislist

    const wishList = await userDbService.getWishList(currentUserId); 

    if (wishList.item_id) {
        throw new Error("this item is already in your whislist");
        };


    // add item to whislist

  const newItemWhised = {
    id: generateUUID(),
    userid: currentUserId,
    item_id: itemId,
    };

    console.log(newItemWhised);

    await userDbService.storeItemWhised(newItemWhised);

};