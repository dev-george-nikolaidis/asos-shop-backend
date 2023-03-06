import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

interface RequestValidators {
	body?: AnyZodObject;
	params?: AnyZodObject;
	query?: AnyZodObject;
}

export function validateRequest(req: Request, res: Response, next: NextFunction) {
	console.log(req.body);
	return async () => {
		try {
			next();
		} catch (error) {
			next(error);
		}
	};
}
