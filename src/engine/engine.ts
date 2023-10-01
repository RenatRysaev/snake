import { Snake } from "../snake";
import { Food } from "../food";

export class Engine {
  private Snake: Snake;
  private Food: Food;

  constructor(Snake: Snake, Food: Food) {
    this.Snake = Snake;
    this.Food = Food;
  }

  public loop() {
    this.tick();

    const interval = window.setInterval(() => {
      this.loop();

      window.clearInterval(interval);
    }, 60);
  }

  private runFoodLogic() {
    const foodCoordinate = this.Food.getCoordinate();

    const snakeCoordinates = this.Snake.coordinates
      .toArray()
      .map((coordinate) => coordinate.value);

    if (!foodCoordinate) {
      this.Food.generateConsideringForbiddenCoordinates(snakeCoordinates);
      return;
    }

    const isSnakeAteFood = this.Snake.isEqualToHeadCoordinate(foodCoordinate);

    if (isSnakeAteFood) {
      this.Food.delete();
    }
  }

  private runSnakeLogic = () => {
    this.Snake.move();
  };

  private tick() {
    this.runFoodLogic();
    this.runSnakeLogic();
  }
}
