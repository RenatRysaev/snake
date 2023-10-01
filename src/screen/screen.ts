export class Screen {
  public readonly canvas: HTMLCanvasElement;
  public readonly startButton: HTMLButtonElement;

  constructor(canvas: HTMLCanvasElement, startButton: HTMLButtonElement) {
    this.canvas = canvas;
    this.startButton = startButton;
  }

  public setPlaygroundSize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  public hideStartButton = () => {
    this.startButton.style.display = "none";
  };
}
