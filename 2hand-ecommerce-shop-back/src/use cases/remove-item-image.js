const itemDbService = require("../services/items-db-service");
const imageDbService = require("../services/images-db-service");
const errorService = require("../services/error-service.js");
const fileService = require("../services/file-service.js");

module.exports = async (item_id, image_id, user_id) => {
  const item = await itemDbService.getItemById(item_id);
  const image = await imageDbService.getImageById(image_id);

  //check if post exist
  if (!item) {
    errorService.notFound();
  }
  console.log(item.user_id);
  console.log(user_id);
  //check if user is owner
  if (item.user_id != user_id) {
    errorService.unauthorizedUser();
  }

  //check if photo exist
  if (!image) {
    errorService.notFound();
  }

  //check if photo belong to item
  if (image.item_id != item_id) {
    errorService.unauthorizedUser();
  }

  //Delete image from database
  await imageDbService.deleteImage(image_id);

  //Delete image from file system
  await fileService.deleteImage(image);
};
