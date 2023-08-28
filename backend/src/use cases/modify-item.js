//Services
const { getItemById, modifyItem } = require("../services/items-db-service");

module.exports = async (item_id, user_id, payload) => {
  //Get the item from the DDBB if exist

  const item = await getItemById(item_id);

  if (!item) {
    errorService.notFound();
  }

  //Check user is Item owner

  if (item.user_id != user_id) {
    errorService.unauthorizedUser();
  }

  const modifiedItem = {
    name: payload.name,
    description: payload.description,
    estimated_price: payload.estimated_price,
    item_condition: payload.item_condition,
    status: payload.status,
    category_id: payload.category_id,
  };
  await modifyItem(item.id, modifiedItem);
};
