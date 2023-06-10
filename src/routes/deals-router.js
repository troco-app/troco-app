const express = require("express");
const { Router, json } = require("express");
const router = Router();

module.exports = router;

//View All Deals
router.get('/deals', async (req, res) => {
  const result = await getAllDeals();
  res.status(200).json(result);
});

//View Deal by ID
  router.get('/deals/:id', async (req, res) => {
    const result = await getDealsById(req.params.id);
    res.status(200).json(result);
  });

//Create a Deal
router.post('/deals',express.json(), async (req, res) => {
  res.status(200).json({
    succes: true,
    data: "se crea el TROCO Deal"
  });
});

//Modify Deal Status
router.patch('/deals/:id',express.json(), async (req, res) => {
  res.status(200).json({
    succes: true,
    data: "se modifica el satus del TROCO Deal"
  });
});

//Delete Deal ---> This is not gonna be use, only for testing
router.patch('/deals',express.json(), async (req, res) => {
  res.status(200).json({
    succes: true,
    data: "se elimina el TROCO Deal"
  });
});
