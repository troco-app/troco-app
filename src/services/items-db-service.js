const { getConnection } = require("../database/mysql-connection.js");

const db = getConnection();

module.exports = {

      //Items

      async saveItem(item) {
        const statement = `
        INSERT INTO items(id,name,description,estimated_price,item_condition,status,category_id,user_id)
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
          item.user_id,
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
      return rows[0];
      }, 

      async modifyItem(item_id, modifiedItem) {
        const statement = `
        UPDATE items
        SET name = ?, description = ?, estimated_price = ?, item_condition = ?, status = ?, category_id = ?
        WHERE id = ?
        `;
        await db.execute(statement, [modifiedItem.name, modifiedItem.description, modifiedItem.estimated_price, modifiedItem.item_condition, modifiedItem.status, modifiedItem.category_id, item_id]);
      },

      async searchByTerm(searchTerm, categoryName, condition, status, location) {
        let sql = `
          SELECT items.*, category.category_name, users.postal_code 
          FROM items 
          JOIN category ON items.category_id = category.id 
          JOIN users ON items.user_id = users.id 
          WHERE items.status = 'available' AND items.is_deleted = false
        `;
      
        const params = [];
      
        if (searchTerm) {
          const likeTerm = `%${searchTerm}%`;
          sql += ' AND (items.name LIKE ? OR items.description LIKE ? OR category.category_name LIKE ?)';
          params.push(likeTerm, likeTerm, likeTerm);
        }
      
        if (categoryName) {
          sql += ' AND category.category_name = ?';
          params.push(categoryName);
        }
      
        if (condition) {
          sql += ' AND items.item_condition = ?';
          params.push(condition);
        }
      
        if (status) {
          sql += ' AND items.status = ?';
          params.push(status);
        }
      
        if (location) {
          sql += ' AND users.postal_code = ?';
          params.push(location);
        }
      
        const [rows] = await db.execute(sql, params);
        return rows;
      }

};