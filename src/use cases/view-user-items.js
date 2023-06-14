//Services
const { viewUserItems } = require("../services/items-db-service");

module.exports = async (currentUserId) => {
  return await viewUserItems(currentUserId);
};
