import express, { Request, Response } from "express";
import { greetingsMsg } from "./controllers/greetings";
import { signUp } from "./controllers/user/signup";
import { userList } from "./controllers/user/userlist";
import { registerProduct } from "./controllers/product/registerProduct";
import { listAllProducts } from "./controllers/product/productList";

export const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});
app.get("/", greetingsMsg);
app.post("/signup", signUp);
app.get("/userlist", userList);
app.post("/registerProduct", registerProduct);
app.get("/productList", listAllProducts);
