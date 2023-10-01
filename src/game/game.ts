import { Engine } from "../engine";

export class Game {
  private readonly Engine: Engine;

  constructor(Engine: Engine) {
    this.Engine = Engine;
  }
  public start() {
    this.Engine.loop();
  }

  public stop() {}
}
