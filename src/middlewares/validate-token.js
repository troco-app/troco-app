const cryptoService = require("../services/crypto-services");

module.exports = (req, res, next) => {

//Get Headers
const token = req.headers.authorization;
//Check user from headers
const user = cryptoService.parseJWT(token);
//set user
req.currentUser = user;

next();

}; 