import { shared } from "../shared";

export class ControllerFactory extends shared.types.AbstractController {
  private readonly controllers: shared.types.AbstractController[];

  constructor(controllers: shared.types.AbstractController[]) {
    super();

    this.controllers = controllers;
  }

  public registerHandlers = () => {
    this.controllers.forEach((controller) => {
      controller.registerHandlers();
    });
  };
}
