import { List } from "linked-list";
import { Coordinate } from "../coordinate";
import { Shared } from "../shared";

describe("class Snake", () => {
  describe("method 'move' should change coordinates correctly", () => {
    test("when direction is right", () => {
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

      const snake = Shared.TestUtils.snakeFactory(initialSnakeCoordinates);

      snake.changeMoveDirection(Shared.Types.MoveDirection.Right);

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

      const snake = Shared.TestUtils.snakeFactory(initialSnakeCoordinates);

      snake.changeMoveDirection(Shared.Types.MoveDirection.Left);

      snake.move();

      expect(snake.coordinates.head?.value).toEqual(
        expectedSnakeCoordinates.head?.value,
      );
      expect(snake.coordinates.tail?.value).toEqual(
        expectedSnakeCoordinates.tail?.value,
      );
    });

    test("when direction is top", () => {
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

      const snake = Shared.TestUtils.snakeFactory(initialSnakeCoordinates);

      snake.changeMoveDirection(Shared.Types.MoveDirection.Top);

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

      const snake = Shared.TestUtils.snakeFactory(initialSnakeCoordinates);

      snake.changeMoveDirection(Shared.Types.MoveDirection.Bottom);

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
