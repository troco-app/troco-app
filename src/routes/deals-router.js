//Third Party Packages
const express = require("express");
const { Router } = require("express");
const router = Router();

//DDBB services

//Use Cases
const createDeal = require("../use cases/create-deal")
const acceptDeal = require("../use cases/accept-deal")

//Middlewares
const bodyValidation = require("../middlewares/body_validation");

//Utils
const asyncErrors = require("../utils/async-erros");

//Validation Schemas
const userRegisterSchema = require("../validators/user-register-schema");

//ENDPOINTS

module.exports = router;

//View All Deals
router.get('/deals', asyncErrors(async (req, res) => {
  const result = await getAllDeals();
  res.status(200).json(result);
}));

//View Deal by ID
router.get('/deals/:id', asyncErrors(async (req, res) => {
  const result = await getDealsById(req.params.id);
  res.status(200).json(result);
}));

//Create a Deal
router.post('/deals', express.json(), asyncErrors(async (req, res) => {
  await createDeal(req.currentUser.id, req.body)
  res.status(200).json({
    success: true,
    data: "se crea el TROCO Deal"
  });
}));

//Accepct a Deal
router.post('/deals/:id/accept', express.json(), asyncErrors(async (req, res) => {
  await acceptDeal(req.currentUser.id, req.params.id, req.body)
  res.status(200).json({
    success: true,
    data: "se acepto TROCO Deal"
  });
}));

//Modify Deal Status
router.patch('/deals/:id', express.json(), asyncErrors(async (req, res) => {
  res.status(200).json({
    success: true,
    data: "se modifica el status del TROCO Deal"
  });
}));

//Delete Deal ---> This is not gonna be used, only for testing
router.patch('/deals', express.json(), asyncErrors(async (req, res) => {
  res.status(200).json({
    success: true,
    data: "se elimina el TROCO Deal"
  });
}));
