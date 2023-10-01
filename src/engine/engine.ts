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

  private tick() {
    // const adaptedSnakeCoordinates = this.Snake.coordinates
    //   .toArray()
    //   .map((coordinate) => coordinate.value);

    // this.Food.generateConsideringForbiddenCoordinates(adaptedSnakeCoordinates);
    console.log(this.Food);

    // нужно чтобы на экране была только 1 еда, поэтому здесь нужно реализовать механизм проверки
    // съела ли змея еду(пересеклась ли началом с едой), если пересеклась - удалять текущую еду и сгенерировать новую

    this.Snake.move();
  }
}
