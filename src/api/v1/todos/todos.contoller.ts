import { NextFunction, Request, Response } from "express";
// import { Todo, Todos, TodoWithId } from "./todos.model";

export async function findAll(req: Request, res: Response, next: NextFunction) {
	// try {
	// 	const result = await Todos.find();
	// 	const todos = await result.toArray();
	// 	console.log(todos);
	// 	res.json(todos);
	// } catch (error) {
	// 	next(error);
	// }
}

export async function createOne(req: Request, res: Response, next: NextFunction) {
	// try {
	// 	console.log("first");
	// 	const result = await Todo.parse(req.body);
	// 	// const insertResult = await Todos.insertOne(result);
	// } catch (error) {
	// 	next(error);
	// }
}
