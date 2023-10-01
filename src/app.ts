import { List } from "linked-list";
import { ControllerFactory } from "./controller-factory";
import { Game, GameController } from "./game";
import { Engine } from "./engine";
import { Snake, SnakeController } from "./snake";
import { Coordinate } from "./coordinate";
import { Screen } from "./screen";
import { Figure } from "./figure";
import { Food } from "./food";

const playgroundSize = {
  width: window.innerWidth,
  height: window.innerHeight,
};

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
const canvasContext = canvas.getContext("2d") as CanvasRenderingContext2D;
const startButton = document.getElementById("start_game") as HTMLButtonElement;

const snake = new Snake(
  initialSnakeCoordinates,
  10,
  playgroundSize,
  new Figure(canvasContext),
);

const food = new Food(new Figure(canvasContext), playgroundSize);

const screen = new Screen(canvas, startButton);
screen.setPlaygroundSize(playgroundSize.width, playgroundSize.height);

const engine = new Engine(snake, food);
const game = new Game(engine);

const appController = new ControllerFactory([
  new GameController(game, screen),
  new SnakeController(snake),
]);

appController.registerHandlers();
