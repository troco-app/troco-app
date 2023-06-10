const express = require("express");
const { Router, json } = require("express");
const router = Router();
const { getAllUsers } = require("../services/db-service");
const { getUsersById } = require("../services/db-service");
const registerUser = require("../use cases/register-user");
const loginUser = require("../use cases/login-user");
const { updateUsersById } = require("../services/db-service");
const registrationCodeValidation = require("../use cases/registration-code-validation");

module.exports = router;

//Create a User
router.post('/users/register',express.json(), async (req, res) => {
  await registerUser(req.body);
res.status(200).json({
  succes: true,
  data: "se crea el TROCOLO en base de datos y se envia un email"
});
});

//Validate Registration Code
router.post('/users/validate-code',express.json(), async (req, res) => {
  await registrationCodeValidation(req.body.email,req.body.code);
res.status(200).json({
  succes: true,
  data: "se valido el email del TROCOLO"
});
});

//User Login
router.post('/users/login',express.json(), async (req, res) => {
  const token = await loginUser(req.body);
  res.status(200).json({token});
});

//View All Users
router.get('/users', async (req, res) => {
  const result = await getAllUsers();
  res.status(200).json({result});
});

//View User by ID
router.get('/users/:id', async (req, res) => {
  const result = await getUsersById(req.params.id);
  res.status(200).json(result);
});

//Modify User data
router.patch('/users/:id',express.json(), async (req, res) => {
const result = await updateUsersById(req.params.id, req.body);
res.status(200).json({
  succes: true,
  data: "se modifica la info del TROCOLO"
});
});

//Delete Deal ---> This is not gonna be use, only for testing
router.patch('/users',express.json(), async (req, res) => {
res.status(200).json({
  succes: true,
  data: "Mandar a pastar al TROCOLO"
});
});


