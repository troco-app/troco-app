const express = require("express");
const { Router, json } = require("express");
const router = Router();
const { getAllItems, saveItem } = require("../services/db-service");
const { getItemById } = require("../services/db-service");
const createItem = require("../use cases/create-item");
const modifyItem = require("../use cases/modify-item")

module.exports = router;

//View All Items
router.get('/items', async (req, res) => {
  const result = await getAllItems();
  res.status(200).json(result);
});

//View Item by ID
router.get('/items/:id', async (req, res) => {
  const result = await getItemById(req.params.id);
  res.status(200).json(result);
});

//Create an Item
router.post('/items',express.json(), async (req, res) => {
  await createItem(req.currentUser.id, req.body);
  res.status(200).json({
    succes: true,
    data: "se crea el TROCO item"
  });
  });

//Modify Item
router.put('/items/:id',express.json(), async (req, res) => {
  await modifyItem(req.params.id, req.currentUser.id, req.body)
  res.status(200).json({
    succes: true,
    data: "se modifica el TROCO item"
  });
});

//Delete Item
router.patch('/items',express.json(), async (req, res) => {
  res.status(200).json({
    succes: true,
    data: "se elimina el TROCO item"
  });
});