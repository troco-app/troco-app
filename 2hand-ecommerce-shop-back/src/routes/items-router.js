//Third Party Packages
const express = require("express");
const { Router } = require("express");
const router = Router();
const fileUpload = require("express-fileupload");

//DDBB services
const {
  getAllItems,
  getItemById,
  getItemsByUserId,
  getItemImageById,
} = require("../services/items-db-service");

//Use Cases
const createItem = require("../use cases/create-item");
const modifyItem = require("../use cases/modify-item");
const addItemImage = require("../use cases/add-item-image");
const removeItemImage = require("../use cases/remove-item-image");
const searchItems = require("../use cases/search-items");
const removeItem = require("../use cases/remove-item");

//Middlewares
const auth = require("../middlewares/auth");
const bodyValidation = require("../middlewares/body_validation");

//Utils
const asyncErrors = require("../utils/async-erros");

//Validation Schemas
const createItemSchema = require("../validators/create-item-schema");
const modifyItemSchema = require("../validators/modify-item-schema");

module.exports = router;

//ENDPOINTS FOR USERS AND VISITORS

//Search Items
router.get(
  "/items/search",
  asyncErrors(async (req, res) => {
    const result = await searchItems(req.query);
    res.status(200).json(result);
  })
);

//View All Items
router.get(
  "/items",
  asyncErrors(async (req, res) => {
    const result = await getAllItems();
    res.status(200).json(result);
  })
);

//View Item by ID
router.get(
  "/items/:id",
  asyncErrors(async (req, res) => {
    const result = await getItemById(req.params.id);
    res.status(200).json(result);
  })
);

//View Items by User ID
router.get(
  "/items/user/:id",
  asyncErrors(async (req, res) => {
    const result = await getItemsByUserId(req.params.id);
    res.status(200).json(result);
  })
);

//ENDPOINTS FOR USERS

//Create an Item
router.post(
  "/items",
  auth,
  express.json(),
  bodyValidation(createItemSchema),
  asyncErrors(async (req, res) => {
    const newItemId = await createItem(req.currentUser.id, req.body);
    res.status(200).json({
      success: true,
      data: {
        message: "TROCO item created",
        itemId: newItemId, // Include the ID of the new item in the response
      },
    });
  })
);

//Modify Item
router.patch(
  "/items/:id",
  auth,
  express.json(),
  bodyValidation(modifyItemSchema),
  asyncErrors(async (req, res) => {
    await modifyItem(req.params.id, req.currentUser.id, req.body);
    res.status(200).json({
      success: true,
      data: "TROCO item modified",
    });
  })
);

//Delete Item (logic erase)
router.delete(
  "/items/:id",
  auth,
  express.json(),
  asyncErrors(async (req, res) => {
    await removeItem(req.currentUser.id, req.params.id);
    res.status(200).json({
      success: true,
      data: "TROCO item deleted",
    });
  })
);

//View Item images by ID
router.get(
  "/items/:id/images",
  asyncErrors(async (req, res) => {
    const result = await getItemImageById(req.params.id);
    res.status(200).json(result);
  })
);

//Upload Item's images
router.post(
  "/items/:id/images",
  fileUpload(),
  express.json(),
  asyncErrors(async (req, res) => {
    await addItemImage(req.params.id, req.currentUser.id, req.files.image);
    res.status(200).json({
      success: true,
      data: "Added an image for your TROCO item",
    });
  })
);

//delete Item's images
router.delete(
  "/items/:id/images/:imageId",
  fileUpload(),
  express.json(),
  asyncErrors(async (req, res) => {
    await removeItemImage(
      req.params.id,
      req.params.imageId,
      req.currentUser.id
    );
    res.status(200).json({
      success: true,
      data: "TROCO item image deleted",
    });
  })
);

//ENDPOINTS FOR ADMINS IN THE FUTURE
