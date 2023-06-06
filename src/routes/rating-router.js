const express = require("express");
const { Router, json } = require("express");
const router = Router();

module.exports = router;

//View All Items
router.get('/ratings', async (req, res) => {
  res.status(200).json({
    succes: true,
    data: "Listado de los TROCO ratings"
  });
});

//View Item by ID
router.get('/ratings/:id', async (req, res) => {
  res.status(200).json({
    succes: true,
    data: "Un TROCO rating salvaje aparecio"
  });
});

//Create an Item
router.post('/ratings',express.json(), async (req, res) => {
  res.status(200).json({
    succes: true,
    data: "se crea el TROCO rating"
  });
  });

  //Modify Item
router.patch('/ratings/:id',express.json(), async (req, res) => {
  res.status(200).json({
    succes: true,
    data: "se modifica el TROCO rating"
  });
});

//Delete Item
router.patch('/ratings',express.json(), async (req, res) => {
  res.status(200).json({
    succes: true,
    data: "se elimina el TROCO rating"
  });
});