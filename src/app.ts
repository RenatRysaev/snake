import { Controller } from "./controller";
import { Game } from "./game";
import { Display } from "./display";
import { Snake } from "./snake";
import { Coordinate } from "./coordinate";
import { List } from "linked-list";

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
const controller = new Controller(
  document.getElementById("start-game") as HTMLButtonElement,
  game,
);

controller.registerHandlers();
/*
 * как оно должно работать
 * 1) по нажатию на кнопку старт - запускается игра
 * 2) при запуске игры должна происходить первоначальная отрисовка всех объектов в классе экрана(змея, еда, холст)
 * 3) затем после первоначальной отрисовки стартует игра:
 * - змея перманентно двигается
 * - когда корм едят, он должен появится в новом месте
 * - если змея столкнулась со стеной или сама с собой игра завершается
 * */
