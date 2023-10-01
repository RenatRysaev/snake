import { Shared } from "../shared";
import { Game } from "../game";
import { Screen } from "../screen";

export class GameController extends Shared.Types.AbstractController {
  private readonly Game: Game;
  private readonly Screen: Screen;

  constructor(Game: Game, Screen: Screen) {
    super();

    this.Game = Game;
    this.Screen = Screen;
  }

  private handleStartGame = () => {
    this.Screen.hideStartButton();
    this.Game.start();
  };

  public registerHandlers = () => {
    this.Screen.startButton.addEventListener("click", this.handleStartGame);
  };
}
