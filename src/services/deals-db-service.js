const { getConnection } = require("../database/mysql-connection.js");

const db = getConnection();

module.exports = {



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