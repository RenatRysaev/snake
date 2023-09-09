import { shared } from "../shared";

export class Figure {
  private ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  protected removePart({ x, y, width, height }: shared.types.FigureProps) {
    this.ctx.clearRect(x, y, width, height);
  }

  protected render({ x, y, width, height }: shared.types.FigureProps) {
    this.ctx.beginPath();
    this.ctx.rect(x, y, width, height);
    this.ctx.fillStyle = "green";
    this.ctx.fill();
    this.ctx.closePath();
  }
}
