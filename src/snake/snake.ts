import { List } from "linked-list";
import { Coordinate } from "../coordinate";
import { Shared } from "../shared";
import { Figure } from "../figure";

export class Snake {
  private readonly Figure: Figure;
  private readonly stepSize: number;
  private readonly playgroundSize: Shared.Types.Size;

  public coordinates: List<Coordinate>;
  public width: number;
  public height: number;
  public moveDirection: Shared.Types.MoveDirection;

  constructor(
    initialCoordinates: List<Coordinate>,
    stepSize: number,
    playgroundSize: Shared.Types.Size,
    Figure: Figure,
  ) {
    this.Figure = Figure;
    this.stepSize = stepSize;
    this.playgroundSize = playgroundSize;

    this.coordinates = initialCoordinates;
    this.width = 100;
    this.height = 10;
    this.moveDirection = Shared.Types.MoveDirection.Right;
  }

  public changeMoveDirection(moveDirection: Shared.Types.MoveDirection) {
    this.moveDirection = moveDirection;
  }

  private changeCoordinates() {
    const headCoordinates = this.coordinates.head as Coordinate;
    let newHeadCoordinates = null;

    const isSnakeHeadOutsidePlaygroundByX =
      headCoordinates.value.x < 0 ||
      headCoordinates.value.x > this.playgroundSize.width;

    const isSnakeHeadOutsidePlaygroundByY =
      headCoordinates.value.y < 0 ||
      headCoordinates.value.y > this.playgroundSize.height;

    if (this.moveDirection === Shared.Types.MoveDirection.Right) {
      if (isSnakeHeadOutsidePlaygroundByX) {
        newHeadCoordinates = new Coordinate({
          x: 0,
          y: headCoordinates.value.y,
        });
      } else {
        newHeadCoordinates = new Coordinate({
          x: headCoordinates.value.x + this.stepSize,
          y: headCoordinates.value.y,
        });
      }
    }

    if (this.moveDirection === Shared.Types.MoveDirection.Left) {
      if (isSnakeHeadOutsidePlaygroundByX) {
        newHeadCoordinates = new Coordinate({
          x: this.playgroundSize.width,
          y: headCoordinates.value.y,
        });
      } else {
        newHeadCoordinates = new Coordinate({
          x: headCoordinates.value.x - this.stepSize,
          y: headCoordinates.value.y,
        });
      }
    }

    if (this.moveDirection === Shared.Types.MoveDirection.Bottom) {
      if (isSnakeHeadOutsidePlaygroundByY) {
        newHeadCoordinates = new Coordinate({
          x: headCoordinates.value.x,
          y: 0,
        });
      } else {
        newHeadCoordinates = new Coordinate({
          x: headCoordinates.value.x,
          y: headCoordinates.value.y + this.stepSize,
        });
      }
    }

    if (this.moveDirection === Shared.Types.MoveDirection.Top) {
      if (isSnakeHeadOutsidePlaygroundByY) {
        newHeadCoordinates = new Coordinate({
          x: headCoordinates.value.x,
          y: this.playgroundSize.height,
        });
      } else {
        newHeadCoordinates = new Coordinate({
          x: headCoordinates.value.x,
          y: headCoordinates.value.y - this.stepSize,
        });
      }
    }

    this.coordinates.prepend(newHeadCoordinates);
  }

  private removeLastPart() {
    const tail = this.coordinates.tail;

    if (tail) {
      tail.detach();

      this.Figure.removeDrewPart({
        x: tail?.value.x,
        y: tail?.value.y,
        width: 10,
        height: 10,
      });
    }
  }

  public isEqualToHeadCoordinate(
    coordinate: Shared.Types.CoordinateType,
  ): boolean {
    const headCoordinates = this.coordinates.head as Coordinate;

    return (
      headCoordinates.value.x === coordinate.x &&
      headCoordinates.value.y === coordinate.y
    );
  }

  public move() {
    this.changeCoordinates();
    this.removeLastPart();

    this.coordinates.toArray().forEach((coordinate) => {
      this.Figure.draw({
        x: coordinate.value.x,
        y: coordinate.value.y,
        width: 10,
        height: 10,
      });
    });
  }
}
