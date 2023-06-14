//Services
const { viewUserDeals } = require("../services/deals-db-service");

module.exports = async (currentUserId) => {
  // take  all deals
  const allDeals = await viewUserDeals(currentUserId);

  // Reorganice the information to retun all the info of the deals grouped by Deal ID
  let groups = {};

  allDeals.forEach((item) => {
    let id = item.id;

    if (!groups[id]) {
      groups[id] = [];
    }

    groups[id].push(item);
  });

  let groupedDeals = Object.values(groups);

  return groupedDeals;
};
