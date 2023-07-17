//Services
const userDbService = require("../services/users-db-service");

module.exports = async (currentUserId, itemId) => {
  // check item in wishlist
  const wishList = await userDbService.getWishList(currentUserId);

  // check if itemId exists in wishList
  const itemExists = wishList.some((item) => item.item_id === itemId);

  if (!itemExists) {
    throw new Error("Item not found in wishlist");
  }

  await userDbService.removeItemWhised(itemId);
};
