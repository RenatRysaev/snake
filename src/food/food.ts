import { Shared } from "../shared";
import { Figure } from "../figure";

export class Food {
  private readonly Figure: Figure;
  private readonly playgroundSize: Shared.Types.Size;

  private _coordinate: Shared.Types.CoordinateType | null;

  constructor(Figure: Figure, playgroundSize: Shared.Types.Size) {
    this.Figure = Figure;
    this.playgroundSize = playgroundSize;

    this._coordinate = null;
  }

  public generateConsideringForbiddenCoordinates = (
    forbiddenCoordinates: Shared.Types.CoordinateType[],
  ) => {
    const randomCoordinate = this.getRandomCoordinate(forbiddenCoordinates);
    this.setCoordinate(randomCoordinate);
    this.render(randomCoordinate);
  };

  public delete = () => {
    this.Figure.removeDrewPart({
      x: this._coordinate?.x as number,
      y: this._coordinate?.y as number,
      width: 10,
      height: 10,
    });

    this.setCoordinate(null);
  };

  public setCoordinate = (coordinate: Shared.Types.CoordinateType | null) => {
    this._coordinate = coordinate;
  };

  public getCoordinate = (): Shared.Types.CoordinateType | null => {
    return this._coordinate;
  };

  private getRandomCoordinate = (
    forbiddenCoordinates: Shared.Types.CoordinateType[],
  ): Shared.Types.CoordinateType => {
    const getRandomInt = (max: number): number =>
      Math.floor(Math.random() * max);

    const randomCoordinate = {
      x: getRandomInt(this.playgroundSize.width / 10) * 10,
      y: getRandomInt(this.playgroundSize.height / 10) * 10,
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
