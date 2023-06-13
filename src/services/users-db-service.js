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
        SELECT *
        FROM users as u
        WHERE u.id = ? 
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

      async updateUsersById(userId, payload) {
        const statement = `
        UPDATE users
        SET first_name = ?, last_name = ?, bio_summary = ?, profile_img = ?
        WHERE id = ?
     `;
      const [rows] = await db.execute(statement, [payload.first_name, payload. last_name, payload.bio_summary, payload.profile_img, userId]);
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
      }

};