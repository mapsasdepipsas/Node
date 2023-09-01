const {Router} = require("express")
const router = Router();
const usersCtrl = require("../controller/user.controller");
const {getLibros, getLibrobyId, postLibros, putLibro, deleteLibro} = require ('../controller/user.controller')

router.get("/books", usersCtrl.getLibros);

router.get("/books/:id", usersCtrl.getLibrobyId); 

router.post("/books", usersCtrl.postLibros);

router.put("/books", usersCtrl.putLibro);

router.delete("/books", usersCtrl.deleteLibro);

module.exports = router;