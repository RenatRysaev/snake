import { Shared } from "../shared";
import { Game } from "../game";
import { Screen } from "../screen";

export class GameController extends Shared.Types.AbstractController {
  private readonly game: Game;
  private readonly screen: Screen;

  constructor(game: Game, screen: Screen) {
    super();

    this.game = game;
    this.screen = screen;
  }

  private handleStartGame = () => {
    this.screen.handleStartGame();
    this.game.start();
  };

  public registerHandlers = () => {
    this.screen.startButton.addEventListener("click", this.handleStartGame);
  };
}
