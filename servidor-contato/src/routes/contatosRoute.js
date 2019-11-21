const express = require("express")
const router = express.Router()

const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.post("/criar", controller.add)

router.get("/nome/:nome", controller.getByName)
router.get("/id/:id", controller.getById)
router.delete("/deletar/:id", controller.deleteById)
router.patch("/alterar/:id", controller.alterarById)


module.exports = router
