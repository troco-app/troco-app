const cryptoService = require("../services/crypto-services");
const ItemDbService = require("../services/items-db-service");
const errorService = require("../services/error-service.js");
const fileService = require("../services/file-service.js");

module.exports = async (item_id, user_id, image) => {
    try {
        const item = await ItemDbService.getItemById(item_id);
        if (!item) {
          errorService.notFound();
        }

        if (item.user_id != user_id) {
          errorService.unauthorizedUser();
        }
      
        const id = cryptoService.generateUUID();
      
        const url = await fileService.processUploadedItemImage(item_id, id, image);
      
        const newImage = {
          id: id,
          imageURL: url,
          item_id: item_id,
        };
console.log(newImage);
        await ItemDbService.saveImage(newImage)


        
    } catch (err) {
        console.error(err);
        // handle the error appropriately here, perhaps by rethrowing or passing to an error handler
    }
};