//Third Party Packages
const express = require("express");
const { Router, json } = require("express");
const router = Router();

//DDBB services
const { getAllUsers, getUsersById, updateUsersById } = require("../services/users-db-service");

//Use Cases
const registerUser = require("../use cases/register-user");
const loginUser = require("../use cases/login-user");
const registrationCodeValidation = require("../use cases/registration-code-validation");

//Middlewares
const bodyValidation = require("../middlewares/body_validation");

//Utils
const asyncErrors = require("../utils/async-erros");

//Validation Schemas
const userRegisterSchema = require("../validators/user-register-schema");
const userLoginSchema = require("../validators/user-login-schema");
const validationCodeSchema = require("../validators/validation-code-schema");

//ENDPOINTS

module.exports = router;

//Create a User
router.post('/users/register',express.json(), bodyValidation(userRegisterSchema), asyncErrors(async (req, res) => {
  await registerUser(req.body);
res.status(200).json({
  succes: true,
  data: "se crea el TROCOLO en base de datos y se envia un email"
});
}));

//Validate Email Code
router.post('/users/validate-code',express.json(), bodyValidation(validationCodeSchema), asyncErrors(async (req, res) => {
  await registrationCodeValidation(req.body.email,req.body.code);
res.status(200).json({
  succes: true,
  data: "se valido el email del TROCOLO"
});
}));

//User Login
router.post('/users/login',express.json(), bodyValidation(userLoginSchema), asyncErrors(async (req, res) => {
  const token = await loginUser(req.body);
  res.status(200).json({token});
}));

//View All Users
router.get('/users', asyncErrors(async (req, res) => {
  const result = await getAllUsers();
  res.status(200).json({result});
}));

//View User by ID
router.get('/users/:id', asyncErrors(async (req, res) => {
  const result = await getUsersById(req.params.id);
  res.status(200).json(result);
}) );

//Modify User data
router.patch('/users/:id',express.json(), asyncErrors(async (req, res) => {
  const result = await updateUsersById(req.params.id, req.body);
  res.status(200).json({
    succes: true,
    data: "se modifica la info del TROCOLO"
  });
  }));

//Delete Deal ---> This is not gonna be use, only for testing
router.patch('/users',express.json(), asyncErrors(async (req, res) => {
  res.status(200).json({
    succes: true,
    data: "Mandar a pastar al TROCOLO"
  });
  }));


