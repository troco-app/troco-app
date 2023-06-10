const { getConnection } = require("../database/mysql-connection.js");

const db = getConnection();

module.exports = {

    //Users related actions in the DDBB

    async saveUser(user) {
        const statement = `
        INSERT INTO users(id, username, email, emailValidated, password, first_name, last_name, postal_code, profile_img, bio_summary, is_deleted)
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
          user.postal_code,
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
      return rows;
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

      async updateUsersById(userId, payload) {
        const statement = `
        UPDATE users
        SET first_name = ?, last_name = ?, bio_summary = ?, profile_img = ?
        WHERE id = ?
     `;
      const [rows] = await db.execute(statement, [payload.first_name, payload. last_name, payload.bio_summary, payload.profile_img, userId]);
      return rows;
      },  

      // Validation Codes

      async saveValidationCode(code) {
        const statement = `
        INSERT INTO validation_codes(id,user_id,code,expiration_date)
        VALUES(?,?,?,?)
        `;
        await db.execute(statement, [code.id, code.user_id, code.code, code.expiration_date]);
      },

      async getValidationCodeByUserId(user_id) {
        const statement = `
          SELECT *
          FROM validation_codes
          WHERE user_id = ?
        `;
        const [rows] = await db.execute(statement, [user_id]);
    
        return rows[0];
      },

      async deleteValidationCode(codeId) {
        const statement = `
          DELETE FROM validation_codes
          WHERE id = ?
        `;
        await db.execute(statement, [codeId]);
      },

      async setEmailValidated(userId) {
        const statement = `
          UPDATE users
          SET emailValidated = true
          WHERE id = ?
        `;
        await db.execute(statement, [userId]);
      },

      //Items

      async saveItem(item) {
        const statement = `
        INSERT INTO items(id,name,description,estimated_price,item_condition,status,category_id,userid)
        VALUES(?,?,?,?,?,?,?,?)
        `;
        await db.execute(statement, [
          item.id,
          item.name,
          item.description,
          item.estimated_price,
          item.item_condition,
          item.status,
          item.category_id,
          item.userid,
        ]);
      },

      async getAllItems() {
        const statement = `
        SELECT *
        FROM items
     `;
      const [rows] = await db.execute(statement);
      return rows;
      },

      async getItemsByUserId(user_id) {
        const statement = `
        SELECT *
        FROM items as u
        WHERE u.id = ? 
     `;
      const [rows] = await db.execute(statement, [user_id]);
      return rows;
      }, 
      
      async getItemById(item_id) {
        const statement = `
        SELECT *
        FROM items as i
        WHERE i.id = ? 
     `;
      const [rows] = await db.execute(statement, [item_id]);
      return rows;
      }, 

      async modifyItem(item_id, modifiedItem) {
        const statement = `
        UPDATE items
        SET name = ?, description = ?, estimated_price = ?, item_condition = ?, status = ?, category_id = ?
        WHERE id = ?
        `;
        await db.execute(statement, [modifiedItem.name, modifiedItem.description, modifiedItem.estimated_price, modifiedItem.item_condition, modifiedItem.status, modifiedItem.category_id, item_id]);
      },

      
      //Deals

      async getAllDeals() {
        const statement = `
        SELECT *
        FROM deal
     `;
      const [rows] = await db.execute(statement);
      return rows;
      },

      async getDealsById(userId) {
        const statement = `
        SELECT *
        FROM deal as u
        WHERE u.id = ? 
     `;
      const [rows] = await db.execute(statement, [userId]);
      return rows;
      },    


};