import { List } from "linked-list";
import { ControllerFactory } from "./controller-factory";
import { Game, GameController } from "./game";
import { Display } from "./display";
import { Snake, SnakeController } from "./snake";
import { Coordinate } from "./coordinate";

const initialSnakeCoordinates = List.from([
  new Coordinate({ x: 90, y: 30 }),
  new Coordinate({ x: 80, y: 30 }),
  new Coordinate({ x: 70, y: 30 }),
  new Coordinate({ x: 60, y: 30 }),
  new Coordinate({ x: 50, y: 30 }),
  new Coordinate({ x: 40, y: 30 }),
  new Coordinate({ x: 30, y: 30 }),
  new Coordinate({ x: 20, y: 30 }),
  new Coordinate({ x: 10, y: 30 }),
  new Coordinate({ x: 0, y: 30 }),
]);

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const snakeCtx = canvas.getContext("2d") as CanvasRenderingContext2D;

const snake = new Snake(snakeCtx, initialSnakeCoordinates, 10);
const display = new Display(snake);
const game = new Game(display);

const mainController = new ControllerFactory([
  new GameController(
    document.getElementById("start-game") as HTMLButtonElement,
    game,
  ),
  new SnakeController(snake),
]);

mainController.registerHandlers();
