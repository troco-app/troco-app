//Services
const itemDbService = require("../services/items-db-service")

module.exports = async (currentUserId, itemId) => {
    console.log(currentUserId);
    //check the item belongs to the user

    const items = await itemDbService.getItemsByUserId(currentUserId);

    const item = items.find(item => item.id === itemId);

    if (!item) {
        throw new Error('Item not found or you do not have permission to delete this item');
    }


    //change status of the item is_deleted to true

    await itemDbService.ItemIsDeleted(itemId, true);
};