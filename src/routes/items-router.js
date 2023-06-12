//Third Party Packages
const express = require("express");
const { Router} = require("express");
const router = Router();
const fileUpload = require("express-fileupload");

//DDBB services
const { getAllItems, getItemById } = require("../services/items-db-service");

//Use Cases
const createItem = require("../use cases/create-item");
const modifyItem = require("../use cases/modify-item");
const addItemImage = require("../use cases/add-item-image");
const removeItemImage = require("../use cases/remove-item-image")
const searchItems = require("../use cases/search-items")
const removeItem = require("../use cases/remove-item");

//Middlewares
const authGuard = require("../middlewares/auth");
const bodyValidation = require("../middlewares/body_validation");

//Utils
const asyncErrors = require("../utils/async-erros");

//Validation Schemas
const userRegisterSchema = require("../validators/user-register-schema");


module.exports = router;

//ENDPOINTS FOR USERS AND VISITORS

//Search Items
router.get('/items/search', asyncErrors(async (req, res) => {
  const result = await searchItems(req.query);
  res.status(200).json(result);
}));

//View All Items
router.get('/items', asyncErrors(async (req, res) => {
  const result = await getAllItems();
  res.status(200).json(result);
}));

//View Item by ID
router.get('/items/:id', asyncErrors(async (req, res) => {
  const result = await getItemById(req.params.id);
  res.status(200).json(result);
}));

//ENDPOINTS FOR USERS

//Create an Item
router.post('/items', authGuard, express.json(), asyncErrors(async (req, res) => {
  await createItem(req.currentUser.id, req.body);
  res.status(200).json({
    succes: true,
    data: "TROCO item created"
  });
  }));

//Modify Item
router.put('/items/:id', authGuard, express.json(), asyncErrors(async (req, res) => {
  await modifyItem(req.params.id, req.currentUser.id, req.body)
  res.status(200).json({
    succes: true,
    data: "TROCO item modified"
  });
}));

//Delete Item (logic erase)
router.delete('/items/:id', authGuard,express.json(), asyncErrors(async (req, res) => {
  await removeItem(req.currentUser.id, req.params.id)
  res.status(200).json({
    succes: true,
    data: "TROCO item deleted"
  });
}));

//Upload Item's images
router.post('/items/:id/images', fileUpload(), express.json(), asyncErrors(async (req, res) => {
  await addItemImage(req.params.id, req.currentUser.id, req.files.image);
  res.status(200).json({
    succes: true,
    data: "Added an image for your TROCO item"
  });
  }));

  //delete Item's images
router.delete('/items/:id/images/:imageId', fileUpload(), express.json(), asyncErrors(async (req, res) => {
  await removeItemImage(req.params.id, req.params.imageId, req.currentUser.id);
  res.status(200).json({
    succes: true,
    data: "TROCO item image deleted"
  });
  }));

  //ENDPOINTS FOR ADMINS IN THE FUTURE

