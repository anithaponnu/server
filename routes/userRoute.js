import exprees from "express"


import  { create, deleteUser, getAllUsers, getUserById, update } from "../controller/userControler.js"

const router = exprees.Router();

router.post("/user", create);
router.get("/users",getAllUsers);
router.get("/user/:id", getUserById);
router.put("/update/user/:id", update);
router.delete("/delete/user/:id", deleteUser);

export default router;
