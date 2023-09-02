import { List } from "linked-list";
import { Coordinate } from "../coordinate";
import { shared } from "../shared";
import { Figure } from "../figure";

export class Snake extends Figure {
  private readonly stepSize: number;
  public coordinates: List<Coordinate>;
  public width: number;
  public height: number;
  public moveDirection: shared.types.MoveDirection;

  constructor(
    ctx: CanvasRenderingContext2D,
    initialCoordinates: List<Coordinate>,
    stepSize: number,
  ) {
    super(ctx);

    this.coordinates = initialCoordinates;
    this.width = 100;
    this.height = 10;
    this.stepSize = stepSize;
    this.moveDirection = shared.types.MoveDirection.Right;
  }

  public changeMoveDirection(moveDirection: shared.types.MoveDirection) {
    this.moveDirection = moveDirection;
  }

  private changeCoordinates() {
    const headCoordinates = this.coordinates.head as Coordinate;
    let newHeadCoordinates = null;

    if (this.moveDirection === shared.types.MoveDirection.Right) {
      newHeadCoordinates = new Coordinate({
        x: headCoordinates.value.x + this.stepSize,
        y: headCoordinates.value.y,
      });
    }

    if (this.moveDirection === shared.types.MoveDirection.Left) {
      newHeadCoordinates = new Coordinate({
        x: headCoordinates.value.x - this.stepSize,
        y: headCoordinates.value.y,
      });
    }

    if (this.moveDirection === shared.types.MoveDirection.Bottom) {
      newHeadCoordinates = new Coordinate({
        x: headCoordinates.value.x,
        y: headCoordinates.value.y + this.stepSize,
      });
    }

    if (this.moveDirection === shared.types.MoveDirection.Top) {
      newHeadCoordinates = new Coordinate({
        x: headCoordinates.value.x,
        y: headCoordinates.value.y - this.stepSize,
      });
    }

    this.coordinates.prepend(newHeadCoordinates);
  }

  private removeLastPart() {
    const tail = this.coordinates.tail;
    tail?.detach();
  }

  public move() {
    this.changeCoordinates();
    this.removeLastPart();

    const snakeTailCoordinates = this.coordinates.tail?.value;

    if (snakeTailCoordinates) {
      this.render({
        x: snakeTailCoordinates?.x,
        y: snakeTailCoordinates?.y,
        width: this.width,
        height: this.height,
      });
    }
  }
}
