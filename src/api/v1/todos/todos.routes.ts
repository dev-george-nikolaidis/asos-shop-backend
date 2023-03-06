import { Router, Request, Response } from "express";
// import { Todo, Todos, TodoWithId } from "./todos.model";
import * as todosController from "./todos.contoller";
import { validateRequest } from "./todos.middleware";

const router = Router();

router.get("/", todosController.findAll);
router.post("/", validateRequest, todosController.createOne);

export default router;
