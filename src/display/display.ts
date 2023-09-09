import { Snake } from "../snake";

export class Display {
  private snake: Snake;

  constructor(snake: Snake) {
    this.snake = snake;
  }

  public render() {
    this.snake.move();

    const snakeInterval = window.setInterval(() => {
      this.render();

      window.clearInterval(snakeInterval);
    }, 60);
  }
}
