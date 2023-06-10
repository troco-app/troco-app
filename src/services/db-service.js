const { getConnection } = require("../database/mysql-connection.js");

const db = getConnection();

module.exports = {

    //Users 

    async saveUser(user) {
        const statement = `
        INSERT INTO users(id, username, email, password, location, first_name, last_name, bio_summary, profile_img, acceptedTOS, emailValidated)
        VALUES(?,?,?,?,?,?,?,?,?,?,?)
        `;
        await db.execute(statement, [
          user.id,
          user.username,
          user.email,
          user.password,
          user.location,
          user.first_name,
          user.last_name,
          user.bio_summary,
          user.profile_img,
          user.acceptedTOS,
          user.emailValidated,
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
      
      //Items

      async getAllItems() {
        const statement = `
        SELECT *
        FROM items
     `;
      const [rows] = await db.execute(statement);
      return rows;
      },

      async getItemsById(userId) {
        const statement = `
        SELECT *
        FROM items as u
        WHERE u.id = ? 
     `;
      const [rows] = await db.execute(statement, [userId]);
      return rows;
      },  

      async saveItem(item) {
        const statement = `
        INSERT INTO items(id,name,description,category_id,price,userid)
        VALUES(?,?,?,?,?,?)
        `;
        await db.execute(statement, [
          item.id,
          item.name,
          item.description,
          item.category_id,
          item.price,
          item.userid,
        ]);
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