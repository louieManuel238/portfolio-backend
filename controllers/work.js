import knexConfig from '../knexconfig.js';
import knex from "knex";
const db = knex(knexConfig);

export const getWorkExperience = async (req, res) =>{
    try{
        const workList = await db.select("*")
        .from('experiences')
        .where({'user_id': req.params.user})
        if(workList.length<1) throw new Error("No Work Experience Found");

        const works = Array.isArray(workList) ? workList : [workList];
        for(let work of works){
            const tech = (await db.select("tech").from("techstacks")
            .innerJoin("work_techs", "work_techs.tech_id", "techstacks.id")
            .where("work_id", work.id)).map(item => item.tech);
            work["tech"] = tech;
        }
        res.status(200).json(works);
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
        const tech = (await db.select("tech").from("techstacks")
            .innerJoin("work_techs", "work_techs.tech_id", "techstacks.id")
            .where("work_id", work.id)).map(item => item.tech);
            work["tech"] = tech;
        res.status(200).json(work);
    }catch(error){
        res.status(500).json({"Error Retriving Data":error});
    }
}