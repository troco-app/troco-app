const express = require("express");
const { Router, json } = require("express");
const router = Router();

module.exports = router;

//View All Items
router.get('/items', async (req, res) => {
  res.status(200).json({
    succes: true,
    data: "Listado de los TROCO items"
  });
});

//View Item by ID
router.get('/items/:id', async (req, res) => {
  res.status(200).json({
    succes: true,
    data: "Un TROCO item salvahe aparecio"
  });
});

//Create an Item
router.post('/items',express.json(), async (req, res) => {
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