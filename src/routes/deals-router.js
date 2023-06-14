//Third Party Packages
const express = require("express");
const { Router } = require("express");
const router = Router();

//DDBB services

//Use Cases
const createDeal = require("../use cases/create-deal");
const acceptDeal = require("../use cases/accept-deal");
const rejectDeal = require("../use cases/reject-deal");
const rateDeal = require("../use cases/rate-deal");

//Middlewares
const bodyValidation = require("../middlewares/body_validation");
const auth = require("../middlewares/auth");

//Utils
const asyncErrors = require("../utils/async-erros");

//Validation Schemas
const createDealSchema = require("../validators/create-deal-schema");
const acceptDealSchema = require("../validators/accept-deal-schema");
const rejectDealSchema = require("../validators/reject-deal-schema");
const rateDealSchema = require("../validators/rate-deal-schema");

module.exports = router;

//ENDPOINTS FOR TROCO USERS

//Create a Deal
router.post(
  "/deals",
  auth,
  express.json(),
  bodyValidation(createDealSchema),
  asyncErrors(async (req, res) => {
    await createDeal(req.currentUser.id, req.body);
    res.status(200).json({
      success: true,
      data: "TROCODEAL created",
    });
  })
);

//Accepct a Deal
router.post(
  "/deals/:id/accept",
  auth,
  express.json(),
  bodyValidation(acceptDealSchema),
  asyncErrors(async (req, res) => {
    await acceptDeal(req.currentUser.id, req.params.id, req.body);
    res.status(200).json({
      success: true,
      data: "TROCODEAL Accepted",
    });
  })
);

//Reject a Deal
router.post(
  "/deals/:id/reject",
  auth,
  express.json(),
  bodyValidation(rejectDealSchema),
  asyncErrors(async (req, res) => {
    await rejectDeal(req.currentUser.id, req.params.id, req.body);
    res.status(200).json({
      success: true,
      data: "TROCODEAL rejected",
    });
  })
);

//Rate a Deal
router.post(
  "/deals/:id/rate",
  auth,
  express.json(),
  bodyValidation(rateDealSchema),
  asyncErrors(async (req, res) => {
    await rateDeal(req.currentUser.id, req.params.id, req.body);
    res.status(200).json({
      success: true,
      data: "TROCODEAL rated",
    });
  })
);

//ENDPOINTS FOR ADMINS IN THE FUTURE WE NEED TO ADD ADMIN AUTHOTRITATIONS FOR PROJECT 3

//View All Deals
router.get(
  "/deals",
  asyncErrors(async (req, res) => {
    const result = await getAllDeals();
    res.status(200).json(result);
  })
);

//View Deal by ID
router.get(
  "/deals/:id",
  asyncErrors(async (req, res) => {
    const result = await getDealsById(req.params.id);
    res.status(200).json(result);
  })
);

//Modify Deal Status

//Delete Deal ---> This is not gonna be used, only for testing
