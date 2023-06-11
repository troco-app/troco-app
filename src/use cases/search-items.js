const ItemDbService = require("../services/items-db-service");

module.exports = async (query) => {
    const { search, category_name, item_condition, status, location } = query;
    const items = await ItemDbService.searchByTerm(search, category_name, item_condition, status, location);
    return items;
  };
  

  