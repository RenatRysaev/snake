import { Item } from "linked-list";

export type CoordinateType = {
  x: number;
  y: number;
};

export class Coordinate extends Item {
  public readonly value: CoordinateType;
  constructor(value: CoordinateType) {
    super();
    this.value = value;
  }
}
