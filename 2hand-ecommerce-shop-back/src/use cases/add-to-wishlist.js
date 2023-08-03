// Services
const { generateUUID } = require("../services/crypto-services");
const userDbService = require("../services/users-db-service");
const itemDbService = require("../services/items-db-service");

module.exports = async (currentUserId, itemId) => {
  // Check if the item is in the database and is available
  const items = await itemDbService.getAllItems();
  const itemInDDBB = items.find((item) => item.id === itemId);

  if (!itemInDDBB) {
    throw new Error("Item not available to be wishlisted");
  }

  // Check if the item does not belong to the user
  const userItems = await itemDbService.getItemsByUserId(currentUserId);
  const itemBelongsToUser = userItems.some((item) => item.id === itemId);

  if (itemBelongsToUser) {
    throw new Error("Can't wishlist your own item");
  }

  // Check if the item is not already in the wishlist
  const wishList = await userDbService.getWishList(currentUserId);
  const isItemInWishlist = wishList.some((item) => item.item_id === itemId);

  if (isItemInWishlist) {
    throw new Error("Item already in wishlist");
  }

  // Add item to the wishlist
  const newItemWhised = {
    id: generateUUID(),
    userid: currentUserId,
    item_id: itemId,
  };

  await userDbService.storeItemWhised(newItemWhised);

  // Fetch the specific item details and return the response
  const itemDetails = await itemDbService.getItemById(itemId);

  return {
    success: true,
    data: {
      id: newItemWhised.id,
      item_id: newItemWhised.item_id,
    },
  };
};
