
import express from "express"
const appp = express()
import productsRoutes from "./routes/products.js"
import sellersRoutes from "./routes/sellers.js"
import authRoutes from "./routes/auth.js"
import cors from "cors"
import cookieParser from "cookie-parser"


appp.use(cors())
appp.use(cookieParser()) 
appp.use(express.json())
appp.use("/api/products",productsRoutes)
appp.use("/api/auth",authRoutes)
appp.use("/api/sellers",sellersRoutes)

appp.listen(8800,()=>{
    console.log("Connected!")
})