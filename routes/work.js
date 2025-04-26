import express from "express";
import {getWorkExperience, getWorkExperienceByID} from '../controllers/work.js';
const router = express.Router();
router.get('/:user/', getWorkExperience);
router.get("/:user/:id", getWorkExperienceByID);

export default router;