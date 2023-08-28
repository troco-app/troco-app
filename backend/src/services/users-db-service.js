const { getConnection } = require("../database/mysql-connection.js");

const db = getConnection();

module.exports = {
  //Users related actions in the DDBB

  async saveUser(user) {
    const statement = `
        INSERT INTO users(id, username, email, emailValidated, password, first_name, last_name, city, profile_img, bio_summary, is_deleted)
        VALUES(?,?,?,?,?,?,?,?,?,?,?)
        `;
    await db.execute(statement, [
      user.id,
      user.username,
      user.email,
      user.emailValidated,
      user.password,
      user.first_name,
      user.last_name,
      user.city,
      user.profile_img,
      user.bio_summary,
      user.is_deleted,
    ]);
  },

  async getAllUsers() {
    const statement = `
        SELECT *
        FROM users
     `;
    const [rows] = await db.execute(statement);
    return rows;
  },

  async getUsersById(userId) {
    const statement = `
      SELECT u.*, AVG(dr.rating) AS average_rating
      FROM users AS u
      LEFT JOIN deals_ratings AS dr ON u.id = dr.userid
      WHERE u.id = ?
      GROUP BY u.id
    `;
    const [rows] = await db.execute(statement, [userId]);
    return rows[0];
  },

  async getUserByEmail(email) {
    const statement = `
          SELECT *
          FROM users
          WHERE users.email = ?
        `;
    const [rows] = await db.execute(statement, [email]);

    return rows[0];
  },

  async getUserByUsername(username) {
    const statement = `
          SELECT *
          FROM users
          WHERE users.username = ?
        `;
    const [rows] = await db.execute(statement, [username]);

    return rows[0];
  },

  async updateUsersById(userId, user) {
    const statement = `
        UPDATE users
        SET first_name = ?, last_name = ?, bio_summary = ?, profile_img = ?, password = ?, city = ?
        WHERE id = ?
     `;
    const [rows] = await db.execute(statement, [
      user.first_name,
      user.last_name,
      user.bio_summary,
      user.profile_img,
      user.password,
      user.city,
      userId,
    ]);
    return rows[0];
  },

  async storeItemWhised(newItemWhised) {
    const statement = `
        INSERT INTO wishlist(id, userid, item_id)
        VALUES(?,?,?)
        `;
    await db.execute(statement, [
      newItemWhised.id,
      newItemWhised.userid,
      newItemWhised.item_id,
    ]);
  },

  async getWishList(currentUserId) {
    const statement = `
          SELECT *
          FROM wishlist
          WHERE userid = ?
        `;
    const [rows] = await db.execute(statement, [currentUserId]);

    return rows;
  },

  async removeItemWhised(itemId) {
    const statement = `
          DELETE FROM wishlist
          WHERE item_id = ?
        `;
    await db.execute(statement, [itemId]);
  },
};
