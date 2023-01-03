import {db} from '../db.js'


export const getSeller = (req,res)=>{
    const q = "SELECT `email`, `address`, `contact`, `username`  FROM sellers WHERE idseller=?"
    db.query(q,[req.params.idseller], (err, data)=>{
        if (err) return res.json(err)

        return res.status(200).json(data[0])
    })}