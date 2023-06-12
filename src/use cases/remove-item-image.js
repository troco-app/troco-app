const itemDbService = require("../services/items-db-service");
const imageDbService = require("../services/images-db-service");
const errorService = require("../services/error-service.js");
const fileService = require("../services/file-service.js");

module.exports = async (item_id, image_id, user_id) => {
  try {
    const item = await itemDbService.getItemById(item_id);
    const image = await imageDbService.getImageById(image_id);

    //checkear que ese post exista
    if (!item) {
      errorService.notFound();
    }

    //checkear si este usuario puede cargarle fotos a ese post.
    if (item.user_id != user_id) {
      errorService.unauthorizedUser();
    }

    //checkear si existe la foto
    if (!image) {
      errorService.notFound();
    }


    //Si la foto no es una foto de ese post
    if (image.item_id != item_id) {
      errorService.unauthorizedUser();
    };


    //Borrar la foto de la base de datos
    await imageDbService.deleteImage(image_id);


    //Borrar la foto del sistema archivos
    await fileService.deleteImage(image);

  } catch (error) {

    // handle the error here or rethrow it
  }
};
