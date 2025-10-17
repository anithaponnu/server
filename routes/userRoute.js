import exprees from "express"


import  { create, getAllUsers, getUserById } from "../controller/userControler.js"

const router = exprees.Router();

router.post("/user", create);
router.get("/users",getAllUsers);
router.get("/user/:id", getUserById)
export default router;
