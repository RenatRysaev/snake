import { Item } from "linked-list";
import { Shared } from "../shared";

export class Coordinate extends Item {
  public readonly value: Shared.Types.CoordinateType;
  constructor(value: Shared.Types.CoordinateType) {
    super();
    this.value = value;
  }
}
