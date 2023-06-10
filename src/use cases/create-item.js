const { generateUUID } = require("../services/crypto-services");
const { saveItem } = require("../services/db-service.js");

module.exports = async (currentUserId, payload) => {

    const newItem = {
        id: generateUUID(),
        name: payload.name,
        description: payload.description,
        estimated_price: payload.estimated_price,
        item_condition: payload.item_condition,
        status: payload.status,
        category_id: payload.category_id,
        userid: currentUserId,
      };

      console.log(newItem);

      await saveItem(newItem);
};