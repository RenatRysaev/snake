import { List } from "linked-list";
import { Coordinate } from "../coordinate";
import { Shared } from "../shared";
import { Figure } from "../figure";
import { Screen } from "../screen";

export class Snake {
  private readonly Figure: Figure;
  private readonly Screen: Screen;
  private readonly stepSize: number;
  public coordinates: List<Coordinate>;
  public width: number;
  public height: number;
  public moveDirection: Shared.Types.MoveDirection;

  constructor(
    Figure: Figure,
    Screen: Screen,
    initialCoordinates: List<Coordinate>,
    stepSize: number,
  ) {
    this.Figure = Figure;
    this.Screen = Screen;
    this.coordinates = initialCoordinates;
    this.width = 100;
    this.height = 10;
    this.stepSize = stepSize;
    this.moveDirection = Shared.Types.MoveDirection.Right;
  }

  public changeMoveDirection(moveDirection: Shared.Types.MoveDirection) {
    this.moveDirection = moveDirection;
  }

  private changeCoordinates() {
    const headCoordinates = this.coordinates.head as Coordinate;
    let newHeadCoordinates = null;

    const playgroundWidth = this.Screen.canvas.width;
    const playgroundHeight = this.Screen.canvas.height;

    const isSnakeHeadOutsidePlaygroundByX =
      headCoordinates.value.x < 0 || headCoordinates.value.x > playgroundWidth;
    const isSnakeHeadOutsidePlaygroundByY =
      headCoordinates.value.y < 0 || headCoordinates.value.y > playgroundHeight;

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
          x: playgroundWidth,
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
          y: playgroundHeight,
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
