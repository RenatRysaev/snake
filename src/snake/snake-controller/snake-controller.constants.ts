import { shared } from "../../shared";

export enum ARROW_KEY_CODE {
  LEFT = "ArrowLeft",
  TOP = "ArrowUp",
  RIGHT = "ArrowRight",
  BOTTOM = "ArrowDown",
}

export const MAP_ARROW_KEY_CODE_TO_DIRECTION = {
  [ARROW_KEY_CODE.LEFT]: shared.types.MoveDirection.Left,
  [ARROW_KEY_CODE.TOP]: shared.types.MoveDirection.Top,
  [ARROW_KEY_CODE.RIGHT]: shared.types.MoveDirection.Right,
  [ARROW_KEY_CODE.BOTTOM]: shared.types.MoveDirection.Bottom,
};
