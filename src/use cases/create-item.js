const { generateUUID } = require("../services/crypto-services");
const { saveItem } = require("../services/db-service.js");

module.exports = async (currentUserId, payload) => {

    const newItem = {
        id: generateUUID(),
        name: payload.name,
        description: payload.description,
        category_id: payload.category_id,
        price: payload.price,
        userid: currentUserId,
      };

      console.log(newItem);

      await saveItem(newItem);
};