import { Game } from "../game";

export class Controller {
  private readonly startButton: HTMLButtonElement;
  private readonly game: Game;

  constructor(startButton: HTMLButtonElement, game: Game) {
    this.startButton = startButton;
    this.game = game;
  }

  public registerHandlers() {
    this.startButton.addEventListener("click", () => {
      this.game.start();
    });
  }
}
