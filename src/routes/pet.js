const express = require ('express');
const router = express.Router();
const controllerPet = require ("../controllers/pet")

const controllerP = new controllerPet();

router.get("/animal/names", controllerP.getAll)
router.get("/animal/name/:id", controllerP.getOne)
router.delete("/animal/delete/:id", controllerP.delete)
router.post("/animal/add", controllerP.add)
router.put("/animal/update/:id", controllerP.update)

module.exports = router;