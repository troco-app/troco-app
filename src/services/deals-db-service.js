const { getConnection } = require("../database/mysql-connection.js");

const db = getConnection();

module.exports = {

      async getAllDeals() {
        const statement = `
        SELECT *
        FROM deals
     `;
      const [rows] = await db.execute(statement);
      return rows;
      },

      async getDealById(dealId) {
        const statement = `
        SELECT *
        FROM deals as d
        WHERE d.id = ?  
     `;
      const [rows] = await db.execute(statement, [dealId]);
      return rows[0];
      },
      
      async updateDealStatus(dealId, status) {
        const statement = `
        UPDATE deals 
        SET status = ?
        WHERE id = ?;  
        `;
        const [rows] = await db.execute(statement, [status, dealId]);
        return rows[0]; 
    },
    
      async createDeal(newDeal) {
        const statement = `
        INSERT INTO deals(id,buyer_id,seller_id,status)
        VALUES(?,?,?,?)
        `;
        await db.execute(statement, [
          newDeal.id,
          newDeal.buyer_id,
          newDeal.seller_id,
          newDeal.status,
        ]);
      },

       async createDealItem (dealItem) {
        const statement = `
          INSERT INTO deal_items (id, deal_id, item_id, owner_id, type)
          VALUES (?, ?, ?, ?, ?)
        `;
        await db.execute(statement, [dealItem.id, dealItem.deal_id, dealItem.item_id, dealItem.owner_id, dealItem.type]);
      },

      async getDealItems(dealId) {
        const statement = `
            SELECT * 
            FROM deal_items 
            WHERE deal_id = ?;
        `;
    
        const [rows] = await db.execute(statement, [dealId]);
        return rows;
    },

    async createDealExchangeCondition(exchangeCondition) {
      const { id, deal_id, street, city, state, country, postal_code, exchange_date_time } = exchangeCondition;
      
      const statement = `
          INSERT INTO deals_exchange_conditions(id, deal_id, street, city, state, country, postal_code, exchange_date_time)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?);
      `;
      
      const [result] = await db.execute(statement, [id, deal_id, street, city, state, country, postal_code, exchange_date_time]);
      
      return result;
  },

};