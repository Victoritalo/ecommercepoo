import { Request, Response } from "express";

export const greetingsMsg = (_: unknown, res: Response) => {
  return res.status(200).json({ message: "Welcome to our app!" });
};
