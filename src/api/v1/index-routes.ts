import express from "express";
const router = express.Router();
import todos from "./todos/todos.routes";
import usersRoutes from "../v1/users/users.routes";

router.use("/todos", todos);
router.use("/users", usersRoutes);

export default router;
