const {Router} = require ("express");
const router = Router();
const {getBook, postBook, putBook, deleteBook} = require('../controller/user.controller')
const usersCtrl = require("../controller/user.controller");

router.get("/", getBook);
router.post("/book", postBook);
router.put("/book", putBook);
router.delete("/book", deleteBook);

module.exports = router;