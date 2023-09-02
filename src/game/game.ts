import { Display } from "../display";

export class Game {
  private readonly display: Display;

  constructor(display: Display) {
    this.display = display;
  }
  public start() {
    console.log("start");
    this.display.render();
  }

  public stop() {}
}
