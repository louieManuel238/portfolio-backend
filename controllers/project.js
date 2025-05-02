import knexConfig from '../knexconfig.js';
import knex from "knex";
const db = knex(knexConfig);

export const getProjects = async (req, res) =>{
    try{
        const projectList = await db.select("*")
        .from('projects')
        .where({'user_id': req.params.user})
        if(projectList.length<1) throw new Error("No Work Projects Found");

        const projects = Array.isArray(projectList) ? projectList : [projectList];
        for(let project of projects){
            const tech = (await db.select("tech").from("techstacks")
            .innerJoin("project_techs", "project_techs.tech_id", "techstacks.id")
            .where("project_id", project.id)).map(item => item.tech);
            project["tech"] = tech;
        }
        res.status(200).json(projects);
    }catch(error){
        res.status(500).json({"Error Retriving Data":error});
    }
}