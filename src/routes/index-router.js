const {Router} = require("express");
const router = Router();
const usersRouter = require("./users-router");
const itemsRouter = require("./items-router");
const dealsRouter = require("./deals-router");

router.use(usersRouter);
router.use(itemsRouter);
router.use(dealsRouter);


module.exports = router;