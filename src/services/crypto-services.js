const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async hashPassword(plainPassword) {
    return await bcrypt.hash(plainPassword, 12);
  },

  generateUUID() {
    return crypto.randomUUID();
  },

  async validatePassword(plainPassword, hash) {
    return await bcrypt.compare(plainPassword, hash);
  },

  generateJWT(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  },

  parseJWT(token) {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      return payload;
    } catch {
      return null;
    }
  },

  generateValidationCode() {
    const length = 8;
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = crypto.randomInt(0, characters.length);
      code += characters.charAt(randomIndex);
    }

    return code;
  },
};
