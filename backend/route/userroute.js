import express from "express";
import protectroute from "../middleware/protectroute.js";
import { getuserforsidebar } from "../controllers/usercontrollers.js";

const router =express.Router();

router.get("/", protectroute,getuserforsidebar);

export default router;