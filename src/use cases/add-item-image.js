const cryptoService = require("../services/crypto-services");
const dbService = require("../services/db-service.js");
const errorService = require("../services/error-service.js");
const fileService = require("../services/file-service.js");

module.exports = async (item_id, user_id, image) => {
    try {
        const items = await dbService.getItemById(item_id);
        const item = items[0];
        if (!item) {
          errorService.notFound();
        }

        if (item.user_id != user_id) {
          errorService.unauthorizedUser();
        }
      
        const id = cryptoService.generateUUID();
      
        const url = await fileService.processUploadedItemImage(item_id, id, image);
      
        await dbService.saveImage({
          id: id,
          imageURL: url,
          item_id: item_id,
        });
        
    } catch (err) {
        console.error(err);
        // handle the error appropriately here, perhaps by rethrowing or passing to an error handler
    }
};