import { List } from "linked-list";
import { Coordinate } from "../../coordinate";
import { Snake } from "../../snake";
import { Figure } from "../../figure";

export const snakeFactory = (coordinates: List<Coordinate>) => {
  const canvas = document.createElement("canvas");

  const snakeStepSize = 10;
  const playgroundSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  return new Snake(
    coordinates,
    snakeStepSize,
    playgroundSize,
    new Figure(canvas.getContext("2d") as CanvasRenderingContext2D),
  );
};
