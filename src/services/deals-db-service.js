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

      async storeDealRejection (dealItem) {
        const statement = `
          INSERT INTO rejection_reasons (id, deal_id, user_id, rejection_comment)
          VALUES (?, ?, ?, ?)
        `;
        await db.execute(statement, [dealItem.id, dealItem.deal_id, dealItem.user_id, dealItem.rejection_comment]);
      },

      async storeRating (rating) {
        const statement = `
          INSERT INTO deals_ratings (id, deal_id, user_id, rating, rating_comment)
          VALUES (?, ?, ?, ?, ?)
        `;
        await db.execute(statement, [rating.id, rating.deal_id, rating.user_id, rating.rating, rating.rating_comment]);
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

    async getDealRates(dealId, userId) {
      const statement = `
          SELECT * 
          FROM deals_ratings 
          WHERE deal_id = ? AND userid = ? ;
      `;
  
      const [rows] = await db.execute(statement, [dealId, userId]);
      return rows;
  },

    async getDealExchangeConditions(dealId) {
      const statement = `
          SELECT * 
          FROM deals_exchange_conditions 
          WHERE deal_id = ?;
      `;
  
      const [rows] = await db.execute(statement, [dealId]);
      return rows[0];
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