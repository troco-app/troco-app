const dbService = require("../services/db-service.js");
const cryptoService = require("../services/crypto-services.js");
const jwt = require("jsonwebtoken");
const { use } = require("../routes/users-router.js");

module.exports = async ({email, password}) => {

    //we thake the user info based on the email    
    const user = await dbService.getUserByEmail(email);

    //Check the password is correct

    const okPassword = await cryptoService.validatePassword(password, user.password)

    console.log(`Este es el ok password ${okPassword}`);
    //generate token with user data

    const token = cryptoService.generateJWT({
        id: user.id,
        email: user.email,
        username: user.username,
    });

    return token;
};