const express = require ('express');
const router = express.Router();
const ControllerPet = require ("../controllers/controllerPet")

const controllerP = new ControllerPet();

router.get("/pets/", controllerP.FindAll)
router.get("/pets/:id", controllerP.FindById)
router.delete("/pets/:id", controllerP.Delete)
router.post("/pets/", controllerP.Create)
router.put("/pets/:id", controllerP.Update)

module.exports = router;