module.exports = {
  invalidCredentials() {
    throw {
      status: 400, //Bad Request
      code: "INVALID_CREDENTIALS",
      message: "Invalid Credentials",
    };
  },
  emailNotValidated() {
    throw {
      status: 400, //Bad Request
      code: "EMAIL_NOT_VALIDATED",
      message: "Email not validated",
    };
  },
  notAuthenticated() {
    throw {
      status: 401, //401 Unauthorized
      code: "NOT_AUTHENTICATED",
      message: "An 'Authorization' token is needed",
    };
  },
  unauthorizedUser() {
    throw {
      status: 403, //403 Forbidden
      code: "UNAUTHORIZED",
      message: "User nunauthorized to do this action",
    };
  },

  notFound() {
    throw {
      status: 404, //NOT FOUND
      code: "RESOURCE_NOT_FOUND",
      message: "this element is not found",
    };
  },
  emailAlreadyRegistered() {
    throw {
      status: 400, //Bad Request
      code: "EMAIL_ALREADY_REGISTERED",
      message: "this email already belong to TROCO",
    };
  },
  usernamelAlreadyRegistered() {
    throw {
      status: 400, //Bad Request
      code: "USERNAME_ALREADY_REGISTERED",
      message: "The username is already registeres, pplease chose another one",
    };
  },
  invalidValidationCode() {
    throw {
      status: 400, //Bad Request
      code: "INVALID_VALIDATION_CODE",
      message: "Invalid code",
    };
  },
  expiredValidationCode() {
    throw {
      status: 400, //Bad Request
      code: "EXPIRED_VALIDATION_CODE",
      message: "Validation code has expired",
    };
  },
};
