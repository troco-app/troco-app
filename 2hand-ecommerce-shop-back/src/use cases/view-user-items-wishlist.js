//Services
const { itemsInWishList } = require("../services/items-db-service");

module.exports = async (currentUserId) => {
  return await itemsInWishList(currentUserId);
};
