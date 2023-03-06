import { Router, Request, Response } from "express";
import { protectedRoute } from "../middlewares/protected-route";
import { validate } from "../middlewares/validate";

// import * as usersController from "./users.controller";

const router = Router();

router.get("/", protectedRoute, (req: Request, res: Response) => {
	res.send("Get products");
});

export default router;
