import { Request, Response } from "express";
import { users_db } from "../../database/user";
import { User } from "../../models/user.model";

export const signUp = (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const emailExistence = users_db.find((user) => {
    return email === user.email;
  });

  if (!name || !email || !password || name.trim() === "" || email.trim() === "" || password.trim() === "") {
    return res
      .status(400)
      .json({ message: "Please, fill in all the fields and try again!" });
  }

  if (emailExistence) {
    return res.status(401).json({ message: "Email is already registered" });
  }

  const newUser = new User(name, email, password);
  users_db.push(newUser);
  return res.status(201).json({ name: newUser.name, id: newUser.id });
};
