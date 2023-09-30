import express, { Request, Response } from "express";
import { greetingsMsg } from "./controllers/greetings";
import { signUp } from "./controllers/signup";
import { userList } from "./controllers/userlist";

export const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});
app.get("/", greetingsMsg);
app.post("/signup", signUp);
app.get("/userlist", userList);
