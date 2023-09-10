import { Shared } from "../shared";

export class ControllerFactory extends Shared.Types.AbstractController {
  private readonly controllers: Shared.Types.AbstractController[];

  constructor(controllers: Shared.Types.AbstractController[]) {
    super();

    this.controllers = controllers;
  }

  public registerHandlers = () => {
    this.controllers.forEach((controller) => {
      controller.registerHandlers();
    });
  };
}
