
import express from "express"

import productsRoutes from "./routes/products.js"
import sellersRoutes from "./routes/sellers.js"
import authRoutes from "./routes/auth.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import multer from "multer"

const appp = express()
appp.use(cors())
appp.use(cookieParser()) 
appp.use(express.json())
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "../public/upload")
    },
    filename: function (req, file, cb){
        cb(null, Date.now()+file.originalname)
    }
})
const upload = multer({storage})
appp.post("/api/upload", upload.single("file"), function (req,res){
    const file = req.file;
    res.status(200).json(file.filename);
})

appp.use("/api/products",productsRoutes)
appp.use("/api/auth",authRoutes)
appp.use("/api/sellers",sellersRoutes)

appp.listen(8800,()=>{
    console.log("Connected!")
})