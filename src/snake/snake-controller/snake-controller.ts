import { Shared } from "../../shared";
import { Snake } from "../snake.ts";
import * as LOCAL_CONSTANTS from "./snake-controller.constants.ts";

export class SnakeController extends Shared.Types.AbstractController {
  private readonly snake: Snake;

  constructor(snake: Snake) {
    super();

    this.snake = snake;
  }

  private handleChangeDirection = (event: KeyboardEvent) => {
    const MAP_DIRECTION_TO_HANDLER = {
      [Shared.Types.MoveDirection.Left]: () =>
        this.snake.setMoveDirection(Shared.Types.MoveDirection.Left),
      [Shared.Types.MoveDirection.Top]: () =>
        this.snake.setMoveDirection(Shared.Types.MoveDirection.Top),
      [Shared.Types.MoveDirection.Right]: () =>
        this.snake.setMoveDirection(Shared.Types.MoveDirection.Right),
      [Shared.Types.MoveDirection.Bottom]: () =>
        this.snake.setMoveDirection(Shared.Types.MoveDirection.Bottom),
    };

    const pressedKeyCode = event.code;

    const isChangeDirectionKeyPressed = Object.keys(
      LOCAL_CONSTANTS.MAP_ARROW_KEY_CODE_TO_DIRECTION,
    ).includes(pressedKeyCode);

    if (isChangeDirectionKeyPressed) {
      const selectedDirection =
        LOCAL_CONSTANTS.MAP_ARROW_KEY_CODE_TO_DIRECTION[
          pressedKeyCode as LOCAL_CONSTANTS.ARROW_KEY_CODE
        ];
      const handler = MAP_DIRECTION_TO_HANDLER[selectedDirection];

      handler();
    }
  };

  public registerHandlers = () => {
    window.addEventListener("keydown", this.handleChangeDirection);
  };
}
