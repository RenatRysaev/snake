import { List } from "linked-list";
import { Coordinate } from "../../coordinate";
import { Screen } from "../../screen";
import { Snake } from "../../snake";
import { Figure } from "../../figure";

export const snakeFactory = (coordinates: List<Coordinate>) => {
  const canvas = document.createElement("canvas");
  const startButton = document.createElement("button");
  const appScreen = new Screen(startButton, canvas);

  const snakeStepSize = 10;

  return new Snake(
    new Figure(appScreen.snakeRenderingContext),
    coordinates,
    snakeStepSize,
  );
};
