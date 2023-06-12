//Services
const { generateUUID } = require("../services/crypto-services");
const { saveItem } = require("../services/items-db-service");

module.exports = async (currentUserId, payload) => {

//Create Object with body and headers info
    const newItem = {
        id: generateUUID(),
        name: payload.name,
        description: payload.description,
        estimated_price: payload.estimated_price,
        item_condition: payload.item_condition,
        status: payload.status,
        category_id: payload.category_id,
        user_id: currentUserId,
      };

//Save Object in the DDBB
      await saveItem(newItem);
};