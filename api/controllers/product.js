import {db} from '../db.js'
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
    res.json("from controller")
}
export const deleteProduct = (req,res)=>{
    res.json("from controller")
}
export const updateProduct = (req,res)=>{
    res.json("from controller")
}