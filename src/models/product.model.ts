import { randomUUID } from "crypto";

export class Product {
  private _id: string;
  constructor(private _name: string, private _price: number) {
    this._id = randomUUID();
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get price(): number {
    return this._price;
  }

  public set newPrice(newPrice: number) {
    this._price = newPrice;
  }
}
