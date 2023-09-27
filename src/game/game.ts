import { Engine } from "../engine";

export class Game {
  private readonly display: Engine;

  constructor(display: Engine) {
    this.display = display;
  }
  public start() {
    this.display.render();
  }

  public stop() {}
}
