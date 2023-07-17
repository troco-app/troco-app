const { getConnection } = require("../database/mysql-connection.js");

const db = getConnection();

module.exports = {
  //Images

  async getImageById(image_id) {
    const statement = `
        SELECT * FROM item_images
        WHERE id = ?
        `;
    const [rows] = await db.execute(statement, [image_id]);
    return rows[0];
  },

  async saveImage(image) {
    const statement = `
        INSERT INTO item_images(id, item_id, imageURL)
        VALUES(?,?,?)
        `;
    await db.execute(statement, [image.id, image.item_id, image.imageURL]);
  },

  async deleteImage(image_id) {
    const statement = `
        DELETE FROM item_images
        WHERE id = ?
        `;
    await db.execute(statement, [image_id]);
  },
};
