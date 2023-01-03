import express from "express"

import { getSeller } from "../controllers/sellers.js"
const router = express.Router()

router.get("/:idseller", getSeller)

export default router