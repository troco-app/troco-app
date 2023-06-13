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
const addToWishList = require("../use cases/add-to-wishlist")
const removeWishList = require("../use cases/remove-from-wishlist")

//Middlewares
const bodyValidation = require("../middlewares/body_validation");

//Utils
const asyncErrors = require("../utils/async-erros");

//Validation Schemas
const userRegisterSchema = require("../validators/user-register-schema");
const userLoginSchema = require("../validators/user-login-schema");
const validationCodeSchema = require("../validators/validation-code-schema");



module.exports = router;

//ENDPOINTS FOR VISITORS

//Create a User
router.post('/users/register',express.json(), bodyValidation(userRegisterSchema), asyncErrors(async (req, res) => {
  await registerUser(req.body);
res.status(200).json({
  succes: true,
  data: "New TROCOLO created"
});
}));

//ENDPOINTS FOR USERS

//Validate Email Code
router.post('/users/validate-code',express.json(), bodyValidation(validationCodeSchema), asyncErrors(async (req, res) => {
  await registrationCodeValidation(req.body.email,req.body.code);
res.status(200).json({
  succes: true,
  data: "TROCO email validated"
});
}));

//User Login
router.post('/users/login',express.json(), bodyValidation(userLoginSchema), asyncErrors(async (req, res) => {
  const token = await loginUser(req.body);
  res.status(200).json({token});
}));

//Modify User data
router.patch('/users/:id',express.json(), asyncErrors(async (req, res) => {
  const result = await updateUsersById(req.currentUser.id, req.params.id, req.body);
  res.status(200).json({
    succes: true,
    data: "TROCOLO data modified"
  });
  }));

//Add to Wishlist
router.post('/users/wishlist/:itemId',express.json(), asyncErrors(async (req, res) => {
   await addToWishList(req.currentUser.id, req.params.itemId);
  res.status(200).json({
    succes: true,
    data: "Item added to your TROCOLIST"
  });
}));

//Remove from Wishlist
router.delete('/users/wishlist/:itemId',express.json(), asyncErrors(async (req, res) => {
  await removeWishList(req.currentUser.id, req.params.itemId);
 res.status(200).json({
   succes: true,
   data: "Item removed from your TROCOLIST"
 });
}));

//Remove User (logic erase) for next version


 //ENDPOINTS FOR ADMINS IN THE FUTURE

 //View All Users (need to add admin access)
router.get('/users', asyncErrors(async (req, res) => {
  const result = await getAllUsers();
  res.status(200).json({result});
}));

//View User by ID (need to add admin access)
router.get('/users/:id', asyncErrors(async (req, res) => {
  const result = await getUsersById(req.params.id);
  res.status(200).json(result);
}) );