import express from "express"
import { getmessages, sendmessages } from "../controllers/messagecontroller.js";
import protectroute from "../middleware/protectroute.js";
const router = express.Router();


router.get("/:id" , protectroute ,getmessages)
router.post("/send/:id" , protectroute ,sendmessages)
export default router;