import exprees from "express"


import  { create } from "../controller/userControler.js"

const router = exprees.Router();

router.post("/user", create);

export default router;
