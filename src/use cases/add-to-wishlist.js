//Services
const { generateUUID } = require("../services/crypto-services");
const userDbService = require("../services/users-db-service");
const itemDbService = require("../services/items-db-service");

module.exports = async (currentUserId, itemId) => {
  //check item is in DDBB and is available

  const items = await itemDbService.getAllItems();

  let itemInDDBB = items.some((item) => item.item_id === itemId);

  if (!itemInDDBB) {
    throw new Error("Item not available to be wishlisted");
  }

  //check item is in not from the user

  const userItems = await itemDbService.getItemsByUserId(currentUserId);

  let itemBelongUser = userItems.some((item) => item.item_id === itemId);

  if (itemBelongUser) {
    throw new Error("Can't whislist your own item");
  }

  //check item not in whislist

  const wishList = await userDbService.getWishList(currentUserId);

  let isItemInWishlist = wishList.some((item) => item.item_id === itemId);

  if (isItemInWishlist) {
    throw new Error("Item already in wishlist");
  }

  // add item to whislist

  const newItemWhised = {
    id: generateUUID(),
    userid: currentUserId,
    item_id: itemId,
  };

  await userDbService.storeItemWhised(newItemWhised);
};
