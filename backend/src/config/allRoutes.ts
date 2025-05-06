import { Express, NextFunction, Request, Response } from "express";
import authRouter from "../routes/auth.route";
import { Path } from "../navigations/routes";

export const allRoutes = (app: Express) => {
  app.use(authRouter);

  app.get(Path.Root, (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      success: true,
      message: "Hurray!!!",
    });
  });
};
