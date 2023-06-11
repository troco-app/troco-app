const express = require("express");
const { Router, json } = require("express");
const fileUpload = require("express-fileupload");


const { getAllItems } = require("../services/db-service");
const { getItemById } = require("../services/db-service");
const createItem = require("../use cases/create-item");
const modifyItem = require("../use cases/modify-item");
const authGuard = require("../middlewares/auth");
const addItemImage = require("../use cases/add-item-image");
const removeItemImage = require("../use cases/remove-item-image")

const bodyValidation = require("../middlewares/body_validation");
const asyncErrors = require("../utils/async-erros");

//Validation Schemas
const userRegisterSchema = require("../validators/user-register-schema");

const router = Router();

module.exports = router;

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

//Create an Item
router.post('/items', authGuard, express.json(), asyncErrors(async (req, res) => {
  await createItem(req.currentUser.id, req.body);
  res.status(200).json({
    succes: true,
    data: "se crea el TROCO item"
  });
  }));

//Modify Item
router.put('/items/:id', authGuard, express.json(), asyncErrors(async (req, res) => {
  await modifyItem(req.params.id, req.currentUser.id, req.body)
  res.status(200).json({
    succes: true,
    data: "se modifica el TROCO item"
  });
}));

//Delete Item
router.delete('/items', authGuard,express.json(), asyncErrors(async (req, res) => {
  res.status(200).json({
    succes: true,
    data: "se elimina el TROCO item"
  });
}));

//Upload Item's images
router.post('/items/:id/images', fileUpload(), express.json(), asyncErrors(async (req, res) => {
  await addItemImage(req.params.id, req.currentUser.id, req.files.image);
  res.status(200).json({
    succes: true,
    data: "se crea el TROCO item"
  });
  }));

  //delete Item's images
router.delete('/items/:id/images/:imageId', fileUpload(), express.json(), asyncErrors(async (req, res) => {
  await removeItemImage(req.params.id, req.params.imageId, req.currentUser.id);
  res.status(200).json({
    succes: true,
    data: "se crea el TROCO item"
  });
  }));

