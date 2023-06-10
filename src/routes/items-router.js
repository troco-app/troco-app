const express = require("express");
const { Router, json } = require("express");
const router = Router();
const { getAllItems, saveItem } = require("../services/db-service");
const { getItemsById } = require("../services/db-service");
const createItem = require("../use cases/create-item");

module.exports = router;

//View All Items
router.get('/items', async (req, res) => {
  const result = await getAllItems();
  res.status(200).json(result);
});

//View Item by ID
router.get('/items/:id', async (req, res) => {
  const result = await getItemsById(req.params.id);
  res.status(200).json(result);
});

//Create an Item
router.post('/items',express.json(), async (req, res) => {
  const result = await createItem(req.currentUser.id, req.body);
  res.status(200).json({
    succes: true,
    data: "se crea el TROCO item"
  });
  });

  //Modify Item
router.patch('/items/:id',express.json(), async (req, res) => {
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