import { Shared } from "../shared";

export class Figure {
  private ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  public removeDrewPart({ x, y, width, height }: Shared.Types.FigureProps) {
    this.ctx.clearRect(x, y, width, height);
  }

  public draw({ x, y, width, height }: Shared.Types.FigureProps) {
    this.ctx.beginPath();
    this.ctx.rect(x, y, width, height);
    this.ctx.fillStyle = "green";
    this.ctx.fill();
    this.ctx.closePath();
  }
}
