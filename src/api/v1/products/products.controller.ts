import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { json } from "node:stream/consumers";

// @desc    get  user
// @route   GET /api/v1/products/:category
// @access  public
export async function getProductsByCategory(req: Request<{ category: string }, never>, res: Response, next: NextFunction) {
	try {
		axios
			.get("https://www.asos.com/men/jewellery/cat/?cid=5034", {
				method: "GET",
				headers: {},
			})
			.then((data: any) => {
				// console.log(data.data);
				// res.json({ d: data });
				res.send(data.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	} catch (error) {
		next(error);
	}
}
