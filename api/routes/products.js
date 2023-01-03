import express from "express"
import { addProduct, deleteProduct, getProducts, getProduct, updateProduct } from "../controllers/product.js"


const router = express.Router()

router.get("/", getProducts)
router.get("/:idproducts", getProduct)
router.post("/", addProduct)
router.delete("/:id", deleteProduct)
router.put("/:id", updateProduct)



export default router;