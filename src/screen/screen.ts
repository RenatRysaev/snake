export class Screen {
  public readonly canvas: HTMLCanvasElement;
  public readonly snakeRenderingContext: CanvasRenderingContext2D;
  public readonly startButton: HTMLButtonElement;

  constructor(startButton: HTMLButtonElement, canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.snakeRenderingContext = this.canvas.getContext(
      "2d",
    ) as CanvasRenderingContext2D;

    this.startButton = startButton;
  }

  private hideStartButton = () => {
    this.startButton.style.display = "none";
  };

  public handleStartGame = () => {
    this.hideStartButton();
  };
}
