import { shared } from "../../shared";
import { Snake } from "../snake.ts";
import {
  MAP_ARROW_KEY_CODE_TO_DIRECTION,
  ARROW_KEY_CODE,
} from "./snake-controller.constants.ts";

export class SnakeController extends shared.types.AbstractController {
  private readonly snake: Snake;

  constructor(snake: Snake) {
    super();

    this.snake = snake;
  }

  private handleChangeDirection = (event: KeyboardEvent) => {
    const MAP_DIRECTION_TO_HANDLER = {
      [shared.types.MoveDirection.Left]: () =>
        this.snake.changeMoveDirection(shared.types.MoveDirection.Left),
      [shared.types.MoveDirection.Top]: () =>
        this.snake.changeMoveDirection(shared.types.MoveDirection.Top),
      [shared.types.MoveDirection.Right]: () =>
        this.snake.changeMoveDirection(shared.types.MoveDirection.Right),
      [shared.types.MoveDirection.Bottom]: () =>
        this.snake.changeMoveDirection(shared.types.MoveDirection.Bottom),
    };

    const pressedKeyCode = event.code;

    const isChangeDirectionKeyPressed = Object.keys(
      MAP_ARROW_KEY_CODE_TO_DIRECTION,
    ).includes(pressedKeyCode);

    if (isChangeDirectionKeyPressed) {
      const selectedDirection =
        MAP_ARROW_KEY_CODE_TO_DIRECTION[pressedKeyCode as ARROW_KEY_CODE];
      const handler = MAP_DIRECTION_TO_HANDLER[selectedDirection];

      handler();
    }
  };

  public registerHandlers = () => {
    window.addEventListener("keydown", this.handleChangeDirection);
  };
}
