import { List } from "linked-list";
import { Snake } from "./snake.ts";
import { Coordinate } from "../coordinate";
import { shared } from "../shared";

const snakeStepSize = 10;

describe("class Snake", () => {
  describe("method 'move' should change coordinates correctly", () => {
    test("when direction is right", () => {
      const canvas = document.createElement("canvas");
      const snakeCtx = canvas.getContext("2d") as CanvasRenderingContext2D;

      const initialSnakeCoordinates = List.from([
        new Coordinate({ x: 20, y: 30 }),
        new Coordinate({ x: 10, y: 30 }),
        new Coordinate({ x: 0, y: 30 }),
      ]);

      const expectedSnakeCoordinates = List.from([
        new Coordinate({ x: 40, y: 30 }),
        new Coordinate({ x: 30, y: 30 }),
        new Coordinate({ x: 20, y: 30 }),
      ]);

      const snake = new Snake(snakeCtx, initialSnakeCoordinates, snakeStepSize);

      snake.changeMoveDirection(shared.types.MoveDirection.Right);

      snake.move();
      snake.move();

      expect(snake.coordinates.head?.value).toEqual(
        expectedSnakeCoordinates.head?.value,
      );
      expect(snake.coordinates.tail?.value).toEqual(
        expectedSnakeCoordinates.tail?.value,
      );
    });
  });
});
