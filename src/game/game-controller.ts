import { shared } from "../shared";
import { Game } from "../game";

export class GameController extends shared.types.AbstractController {
  private readonly startButton: HTMLButtonElement;
  private readonly game: Game;

  constructor(startButton: HTMLButtonElement, game: Game) {
    super();

    this.startButton = startButton;
    this.game = game;
  }

  private handleStartGame = () => {
    this.game.start();
  };

  public registerHandlers = () => {
    this.startButton.addEventListener("click", this.handleStartGame);
  };
}
