const { getConnection } = require("../database/mysql-connection.js");

const db = getConnection();

module.exports = {
  // Validation Codes

  async saveValidationCode(code) {
    const statement = `
        INSERT INTO validation_codes(id,user_id,code,expiration_date)
        VALUES(?,?,?,?)
        `;
    await db.execute(statement, [
      code.id,
      code.user_id,
      code.code,
      code.expiration_date,
    ]);
  },

  async getValidationCodeByUserId(user_id) {
    const statement = `
          SELECT *
          FROM validation_codes
          WHERE user_id = ?
        `;
    const [rows] = await db.execute(statement, [user_id]);

    return rows[0];
  },

  async deleteValidationCode(codeId) {
    const statement = `
          DELETE FROM validation_codes
          WHERE id = ?
        `;
    await db.execute(statement, [codeId]);
  },

  async setEmailValidated(userId) {
    const statement = `
          UPDATE users
          SET emailValidated = true
          WHERE id = ?
        `;
    await db.execute(statement, [userId]);
  },
};
