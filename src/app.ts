import { List } from "linked-list";
import { ControllerFactory } from "./controller-factory";
import { Game, GameController } from "./game";
import { Engine } from "./engine";
import { Snake, SnakeController } from "./snake";
import { Coordinate } from "./coordinate";
import { Screen } from "./screen";
import { Figure } from "./figure";

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
const startButton = document.getElementById("start_game") as HTMLButtonElement;

const screen = new Screen(startButton, canvas);

const snake = new Snake(
  new Figure(screen.snakeRenderingContext),
  initialSnakeCoordinates,
  10,
);

const engine = new Engine(snake);
const game = new Game(engine);

const appController = new ControllerFactory([
  new GameController(game, screen),
  new SnakeController(snake),
]);

appController.registerHandlers();
