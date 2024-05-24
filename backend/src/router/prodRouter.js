const express = require("express")
const router = express.Router()
const controller= require("../controller/controller.js")

router.get("/" ,controller.GetAllData)
router.get("/:id" ,controller.GetDataById)
router.delete("/:id" ,controller.deleteById)
router.post("/" ,controller.postData)
// router.put("/:id" ,controller.)
router.patch("/:id" ,controller.patchData)



module.exports = router