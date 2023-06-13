
//Services
const { updateUsersById } = require("../services/users-db-service");

module.exports = async (currentUserId, userId, payload) => {
    

//Check current user is the same user trying to modify

if (currentUserId != userId) {
  errorService.unauthorizedUser();
};

    await updateUsersById(userId, payload);

};