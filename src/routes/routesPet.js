const express = require ('express');
const router = express.Router();
const ControllerPet = require ("../controllers/controllerPet")

const controllerP = new ControllerPet();

router.get("/", controllerP.FindAll)
router.get("/:index", controllerP.FindById)
router.delete("/:index", controllerP.Delete)
router.post("/", controllerP.Create)
router.put("/:index", controllerP.Update)

module.exports = router;