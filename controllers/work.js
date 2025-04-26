import knexConfig from '../knexconfig.js';
import knex from "knex";
const db = knex(knexConfig);

export const getWorkExperience = async (req, res) =>{
    try{
        const workList = await db.select("*")
        .from('experiences')
        .where({'user_id': req.params.user})
        if(workList.length<1) throw new Error("No Work Experience Found");
        res.status(200).json(workList);
    }catch(error){
        res.status(500).json({"Error Retriving Data":error});
    }
}
export const getWorkExperienceByID = async (req, res) => {
    try{
        const work = await db.select("*")
        .from('experiences')
        .where({
            'user_id': req.params.user,
            'id': req.params.id
        })
        .first();
        if(work.length<1) throw new Error("No Work Experience Found");
        res.status(200).json(work);
    }catch(error){
        res.status(500).json({"Error Retriving Data":error});
    }
}