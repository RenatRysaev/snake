import { Shared } from "../../shared";

export enum ARROW_KEY_CODE {
  LEFT = "ArrowLeft",
  TOP = "ArrowUp",
  RIGHT = "ArrowRight",
  BOTTOM = "ArrowDown",
}

export const MAP_ARROW_KEY_CODE_TO_DIRECTION = {
  [ARROW_KEY_CODE.LEFT]: Shared.Types.MoveDirection.Left,
  [ARROW_KEY_CODE.TOP]: Shared.Types.MoveDirection.Top,
  [ARROW_KEY_CODE.RIGHT]: Shared.Types.MoveDirection.Right,
  [ARROW_KEY_CODE.BOTTOM]: Shared.Types.MoveDirection.Bottom,
};
