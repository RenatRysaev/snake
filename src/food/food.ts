import { Shared } from "../shared";
import { Figure } from "../figure";

export class Food {
  private readonly Figure: Figure;
  private readonly playgroundSize: Shared.Types.Size;

  public coordinate: Shared.Types.CoordinateType | null;

  constructor(Figure: Figure, playgroundSize: Shared.Types.Size) {
    this.Figure = Figure;
    this.playgroundSize = playgroundSize;

    this.coordinate = null;
  }

  public generateConsideringForbiddenCoordinates = (
    forbiddenCoordinates: Shared.Types.CoordinateType[],
  ) => {
    const coordinate = this.getRandomCoordinate(forbiddenCoordinates);
    this.setCoordinate(coordinate);
    this.render(coordinate);
  };

  private setCoordinate = (coordinate: Shared.Types.CoordinateType) => {
    this.coordinate = coordinate;
  };

  private getRandomCoordinate = (
    forbiddenCoordinates: Shared.Types.CoordinateType[],
  ): Shared.Types.CoordinateType => {
    const getRandomInt = (max: number): number =>
      Math.floor(Math.random() * max);

    const randomCoordinate = {
      x: getRandomInt(this.playgroundSize.width),
      y: getRandomInt(this.playgroundSize.height),
    };

    if (
      this.isRandomCoordinateForbidden(randomCoordinate, forbiddenCoordinates)
    ) {
      return this.getRandomCoordinate(forbiddenCoordinates);
    }

    return randomCoordinate;
  };

  private isRandomCoordinateForbidden = (
    randomCoordinate: Shared.Types.CoordinateType,
    forbiddenCoordinates: Shared.Types.CoordinateType[],
  ): boolean => {
    return !!forbiddenCoordinates.find(
      (forbiddenCoordinate) =>
        forbiddenCoordinate.x === randomCoordinate.x ||
        forbiddenCoordinate.y === randomCoordinate.y,
    );
  };

  private render = (coordinate: Shared.Types.CoordinateType) => {
    this.Figure.draw({
      x: coordinate.x,
      y: coordinate.y,
      width: 10,
      height: 10,
    });
  };
}
