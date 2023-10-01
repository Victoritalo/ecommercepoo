import { Request, Response } from "express";
import { product_db } from "../../database/products";

export const listAllProducts = (req: Request, res: Response) => {
  const products = product_db.map((product) => ({ id: product.id, name: product.name, price: product.price }));
  return products.length === 0 ? res.status(404).json({message: "No product found!"}) : res.status(200).json(products)
};
