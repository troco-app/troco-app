const path = require("path");
const fs = require("fs/promises");
const sharp = require("sharp");

module.exports = {
  async processUploadedItemImage(item_id, image_id, image) {
    try {
      const directory = path.join(__dirname, "../../public/images", item_id);
      await fs.mkdir(directory, { recursive: true });
      const fileName = image_id + ".webp";
      const filePath = path.join(directory, fileName);
      const sharpProcess = await sharp(image.data);
      const metadata = await sharpProcess.metadata();
      if (metadata.width > 1080) {
        sharpProcess.resize(720);
      }
      await sharpProcess.webp().toFile(filePath);
      const fileURL = `/images/${item_id}/${fileName}`;
      return fileURL;
    } catch (err) {
      console.error(err);
      // handle the error appropriately here, perhaps by rethrowing or passing to an error handler
    }
  },

  async deleteImage(image) {
    const directory = path.join(__dirname, "../../public");
    const filePath = path.join(directory, image.imageURL);
    await fs.unlink(filePath);
  },
};
