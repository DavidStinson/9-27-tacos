import { Router } from 'express'
import * as tacoCtrl from "../controllers/tacos.js"

const router = Router()

/* GET tacos */
// localhost:3000/tacos
router.get('/', tacoCtrl.index)

// localhost:3000/tacos/new
router.get("/new", tacoCtrl.new)

// localhost:3000/tacos/:id
router.get("/:id", tacoCtrl.show)

router.post("/", tacoCtrl.create)

router.delete("/:id", tacoCtrl.delete)

export {
  router
}
