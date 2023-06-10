const { getItemById, modifyItem } = require("../services/db-service.js");



module.exports = async (item_id, user_id, payload) => {
    
 

  console.log(user_id);
  const items = await getItemById(item_id);
  const item = items[0];
  console.log(item);

//Falta comprobar que el usuario es el correcto y que el item existe

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