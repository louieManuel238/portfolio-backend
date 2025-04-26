import express from "express";
import {getUserInfo} from '../controllers/user.js';

const router = express.Router();
router.get('/',(_req,res)=>{res.send("User List Admin only")});
router.get("/:id", getUserInfo);

export default router;