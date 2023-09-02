import { Item } from "linked-list";
import { shared } from "../shared";

export class Coordinate extends Item {
  public readonly value: shared.types.CoordinateType;
  constructor(value: shared.types.CoordinateType) {
    super();
    this.value = value;
  }
}
