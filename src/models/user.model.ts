import { randomUUID } from "crypto";
import { Product } from "./product.model";

export class User {
  private _id: string;
  private _cart: Product[] = [];

  constructor(
    private _name: string,
    private _email: string,
    private _password: string
  ) {
    this._id = randomUUID();
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }
  public get email(): string {
    return this._email;
  }

  // public addToCart(product: Product) {
  //   this._cart.push(product);
  // }
}
