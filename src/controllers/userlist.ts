import { Request, Response } from "express";
import { users_db } from "../database/user";

export const userList = (req: Request, res: Response) => {
  const users = users_db.map((user) => ({ id: user.id, name: user.name }));
  return res.status(200).json(users) || res.status(404).json({message: "No users found!"});
};
