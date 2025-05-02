import express from "express";
import {getProjects} from '../controllers/project.js';
const router = express.Router();
router.get('/:user', getProjects);
// router.get("/:user/:id", getWorkExperienceByID);

export default router;