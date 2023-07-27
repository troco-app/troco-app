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

  async saveImage(image) {
    const statement = `
        INSERT INTO item_images(id, imageURL, item_id)
        VALUES(?,?,?)
        `;
    await db.execute(statement, [image.id, image.imageURL, image.item_id]);
  },

  async getAllItems() {
    const statement = `
        SELECT *
        FROM items
        WHERE items.status = 'available' AND items.is_deleted = false
     `;
    const [rows] = await db.execute(statement);
    return rows;
  },

  async getItemsByUserId(user_id) {
    const statement = `
      SELECT i.*, c.category_name, ii.imageURL, u.username, u2.user_average_rating
      FROM items as i
      LEFT JOIN category as c ON i.category_id = c.id
      LEFT JOIN item_images as ii ON i.id = ii.item_id
      LEFT JOIN users as u ON i.user_id = u.id
      LEFT JOIN (
        SELECT userid, AVG(rating) AS user_average_rating
        FROM deals_ratings
        GROUP BY userid
      ) AS u2 ON i.user_id = u2.userid
      WHERE i.user_id = ? 
    `;
    const [rows] = await db.execute(statement, [user_id]);
    return rows;
  },

  async viewUserItems(user_id) {
    const statement = `
        SELECT *
        FROM items
        WHERE user_id = ? 
     `;
    const [rows] = await db.execute(statement, [user_id]);
    return rows;
  },

  async itemsInWishList(user_id) {
    const statement = `
        SELECT wishlist.*, items.name, items.description, items.estimated_price, items.item_condition, items.status, items.category_id
        FROM wishlist
        INNER JOIN items ON wishlist.item_id = items.id
        WHERE wishlist.userid = ? 
     `;
    const [rows] = await db.execute(statement, [user_id]);
    return rows;
  },

  async getItemById(item_id) {
    const statement = `
      SELECT i.*, c.category_name, ii.imageURL, u.username, u2.user_average_rating
      FROM items as i
      LEFT JOIN category as c ON i.category_id = c.id
      LEFT JOIN item_images as ii ON i.id = ii.item_id
      LEFT JOIN users as u ON i.user_id = u.id
      LEFT JOIN (
        SELECT userid, AVG(rating) AS user_average_rating
        FROM deals_ratings
        GROUP BY userid
      ) AS u2 ON i.user_id = u2.userid
      WHERE i.id = ? 
    `;
    const [rows] = await db.execute(statement, [item_id]);
    return rows[0];
  },

  async getItemImageById(item_id) {
    const statement = `
    SELECT id, imageURL
    FROM item_images
    WHERE item_id = ?;
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
    await db.execute(statement, [
      modifiedItem.name,
      modifiedItem.description,
      modifiedItem.estimated_price,
      modifiedItem.item_condition,
      modifiedItem.status,
      modifiedItem.category_id,
      item_id,
    ]);
  },

  async updateItemStatus(itemId, status) {
    const statement = `
            UPDATE items 
            SET status = ?
            WHERE id = ?;
        `;
    const [result] = await db.execute(statement, [status, itemId]);
    return result;
  },

  async ItemIsDeleted(itemId, status) {
    const statement = `
          UPDATE items 
          SET is_deleted = ?
          WHERE id = ?;
      `;
    const [result] = await db.execute(statement, [status, itemId]);
    return result;
  },

  async markItemsSold(itemIds) {
    const statement = `
          UPDATE items 
          SET status = 'sold' 
          WHERE id IN (?);
      `;

    const [rows] = await db.execute(statement, [itemIds]);
    return rows;
  },

  async searchByTerm(
    searchTerm,
    categoryName,
    condition,
    status,
    location,
    minPrice,
    maxPrice
  ) {
    let sql = `
      SELECT items.*, category.category_name, users.city 
      FROM items 
      JOIN category ON items.category_id = category.id 
      JOIN users ON items.user_id = users.id 
      WHERE items.status = 'available' AND items.is_deleted = false
    `;

    const params = [];

    if (searchTerm) {
      const likeTerm = `%${searchTerm}%`;
      sql +=
        " AND (items.name LIKE ? OR items.description LIKE ? OR category.category_name LIKE ?)";
      params.push(likeTerm, likeTerm, likeTerm);
    }

    if (categoryName) {
      sql += " AND category.category_name = ?";
      params.push(categoryName);
    }

    if (condition) {
      sql += " AND items.item_condition = ?";
      params.push(condition);
    }

    if (status) {
      sql += " AND items.status = ?";
      params.push(status);
    }

    if (location) {
      sql += " AND users.city = ?";
      params.push(location);
    }

    if (minPrice) {
      sql += " AND items.estimated_price >= ?";
      params.push(minPrice);
    }

    if (maxPrice) {
      sql += " AND items.estimated_price <= ?";
      params.push(maxPrice);
    }

    const [rows] = await db.execute(sql, params);
    return rows;
  },
};
