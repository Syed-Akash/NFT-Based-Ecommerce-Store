import {db} from '../db.js'
import jwt from "jsonwebtoken";
export const getProducts = (req,res)=>{
    const q = req.query.cat ? "SELECT * FROM products WHERE cat=?" 
    : "SELECT * FROM products";

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.send(err);
        return res.status(200).json(data);
    });
}
export const getProduct = (req,res)=>{
    const q = "SELECT `name`, `price`, `description`, `img`, `cat` FROM products WHERE idproducts=?"
    db.query(q,[req.params.idproducts], (err, data)=>{
        if (err) return res.json(err)

        return res.status(200).json(data[0])
    })
}
export const addProduct = (req,res)=>{
    const token = req.cookies.access_token;
    if(!token) return res.status(401).json("Not Authenticated")
    jwt.verify(token,"jwtkey",(err, userInfo)=>{
        if (err) return res.status(403).json("Token is not Valid!");
       
    const q = "INSERT INTO products(`name`, `description`, price, `cat`, `img`, `sid`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.cat,
        req.body.img,
        userInfo.id
    ]
    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Product has been added.");
      });
    })
}
export const deleteProduct = (req,res)=>{
    res.json("from controller")
}
export const updateProduct = (req,res)=>{
    res.json("from controller")
}