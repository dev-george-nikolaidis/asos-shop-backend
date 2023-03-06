import { Router, Request, Response } from "express";
import { protectedRoute } from "../middlewares/protected-route";
import { validate } from "../middlewares/validate";

import * as productController from "./products.controller";

const router = Router();

// router.get("/", protectedRoute, (req: Request, res: Response) => {
// 	res.send("Get products");
// });
router.get("/:category", (req: Request, res: Response) => {
	res.send("Get products");
});

router.get("/", productController.getProductsByCategory);

export default router;
