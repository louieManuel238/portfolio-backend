import express from "express";
import {getWorkExperience, getWorkExperienceByID} from '../controllers/skill.js';
const router = express.Router();
router.get('/:user/work', getWorkExperience);
router.get("/:user/:id", getWorkExperienceByID);

export default router;