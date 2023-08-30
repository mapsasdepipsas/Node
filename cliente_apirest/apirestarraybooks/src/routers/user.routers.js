const {Router} = require ("express");
const router = Router();
const {getBooks, getBookbyId, postBooks, putBook, deleteBook} = require('../controller/user.controller')
const usersCtrl = require("../controller/user.controller");

router.get("/books", getBooks);
router.get("/books/:id", getBookbyId);
router.post("/books", postBooks);
router.put("/books", putBook);
router.delete("/books/:id", deleteBook);

module.exports = router;