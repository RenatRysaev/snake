import { List } from "linked-list";
import { Snake } from "./snake.ts";
import { Coordinate } from "../coordinate";
import { shared } from "../shared";

const snakeStepSize = 10;

export const createSnakeCtx = (): CanvasRenderingContext2D => {
  const canvas = document.createElement("canvas");

  return canvas.getContext("2d") as CanvasRenderingContext2D;
};

describe("class Snake", () => {
  describe("method 'move' should change coordinates correctly", () => {
    test("when direction is right", () => {
      const snakeCtx = createSnakeCtx();

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

    test("when direction is left", () => {
      const snakeCtx = createSnakeCtx();

      const initialSnakeCoordinates = List.from([
        new Coordinate({ x: 30, y: 30 }),
        new Coordinate({ x: 40, y: 30 }),
        new Coordinate({ x: 50, y: 30 }),
      ]);

      const expectedSnakeCoordinates = List.from([
        new Coordinate({ x: 20, y: 30 }),
        new Coordinate({ x: 30, y: 30 }),
        new Coordinate({ x: 40, y: 30 }),
      ]);

      const snake = new Snake(snakeCtx, initialSnakeCoordinates, snakeStepSize);

      snake.changeMoveDirection(shared.types.MoveDirection.Left);

      snake.move();

      expect(snake.coordinates.head?.value).toEqual(
        expectedSnakeCoordinates.head?.value,
      );
      expect(snake.coordinates.tail?.value).toEqual(
        expectedSnakeCoordinates.tail?.value,
      );
    });

    test("when direction is top", () => {
      const snakeCtx = createSnakeCtx();

      const initialSnakeCoordinates = List.from([
        new Coordinate({ x: 30, y: 30 }),
        new Coordinate({ x: 30, y: 40 }),
        new Coordinate({ x: 30, y: 50 }),
      ]);

      const expectedSnakeCoordinates = List.from([
        new Coordinate({ x: 30, y: 10 }),
        new Coordinate({ x: 30, y: 20 }),
        new Coordinate({ x: 30, y: 30 }),
      ]);

      const snake = new Snake(snakeCtx, initialSnakeCoordinates, snakeStepSize);

      snake.changeMoveDirection(shared.types.MoveDirection.Top);

      snake.move();
      snake.move();

      expect(snake.coordinates.head?.value).toEqual(
        expectedSnakeCoordinates.head?.value,
      );
      expect(snake.coordinates.tail?.value).toEqual(
        expectedSnakeCoordinates.tail?.value,
      );
    });

    test("when direction is bottom", () => {
      const snakeCtx = createSnakeCtx();

      const initialSnakeCoordinates = List.from([
        new Coordinate({ x: 30, y: 50 }),
        new Coordinate({ x: 30, y: 40 }),
        new Coordinate({ x: 30, y: 30 }),
      ]);

      const expectedSnakeCoordinates = List.from([
        new Coordinate({ x: 30, y: 70 }),
        new Coordinate({ x: 30, y: 60 }),
        new Coordinate({ x: 30, y: 50 }),
      ]);

      const snake = new Snake(snakeCtx, initialSnakeCoordinates, snakeStepSize);

      snake.changeMoveDirection(shared.types.MoveDirection.Bottom);

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
