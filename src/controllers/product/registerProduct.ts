import { Request, Response } from "express";
import { Product } from "../../models/product.model";
import { product_db } from "../../database/products";
import { productBody } from "../../interfaces/productBody";

export const registerProduct = (req: Request, res: Response) => {
  const body: productBody = req.body;
  if (!body.name || isNaN(body.price) || body.name.trim() === "" || body.price.toString().trim() === "") {
    return res
      .status(400)
      .json({ message: "Invalid input for name or price" });
  }

  const newProduct = new Product(body.name, body.price);
  product_db.push(newProduct);
  return res.status(201).json(body);
};
