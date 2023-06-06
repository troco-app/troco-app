const express = require("express");
const { Router, json } = require("express");
const router = Router();

module.exports = router;

//View All Users
router.get('/users', async (req, res) => {
  res.status(200).json({
    succes: true,
    data: "Listado de los TROCO usuarios"
  });
});

//View User by ID
router.get('/deals/:id', async (req, res) => {
  res.status(200).json({
    succes: true,
    data: "Un TROCOLO"
  });
});

//Create a User
router.post('/deals',express.json(), async (req, res) => {
res.status(200).json({
  succes: true,
  data: "se crea el TROCOLO"
});
});

//Modify Iser data
router.patch('/deals/:id',express.json(), async (req, res) => {
res.status(200).json({
  succes: true,
  data: "se crea modifica algo del TROCOLO"
});
});

//Delete Deal ---> This is not gonna be use, only for testing
router.patch('/deals',express.json(), async (req, res) => {
res.status(200).json({
  succes: true,
  data: "Mandar a pastar al TROCOLO"
});
});


