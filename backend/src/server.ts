import express, { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import errorMiddleware from "./middlewares/errors";
import Logging from "./library/logs";
import { generalConfig } from "./config/generalConfig";
import { allRoutes } from "./config/allRoutes";
import { PORT } from "./constants";

config();

const app = express();
generalConfig(app);

// Routes
allRoutes(app);

// Middleware to handle errors
app.use(errorMiddleware);

// Handle unknown routes
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const errMessage = `Route ${req.originalUrl} not found`;
  const err = new Error(errMessage) as any;
  err.statusCode = 404;
  next(err);
});

/**
 * Create server
 */
app.listen(PORT || 8000, () => {
  Logging.info(`Server started on port ${PORT}`);
});
