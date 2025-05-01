import knexConfig from '../knexconfig.js';
import knex from "knex";
const db = knex(knexConfig);

export const getUserInfo = async (req, res) =>{
    try{
        const user = await db.select("id", "first_name", "last_name",
             "tagline", "about", "email", "title")
        .from('users')
        .where('id', req.params.id).first();
        if(user.length<1) throw new Error("User not found");
        res.json(user);
    }catch(error){
        res.status(500).json({"no user found":error});
    }
}