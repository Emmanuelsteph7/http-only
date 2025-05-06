import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants";

export const generateToken = (
  id: string,
  expiresIn: string | number = "7d"
) => {
  return jwt.sign(
    {
      id,
    },
    JWT_SECRET,
    {
      expiresIn: expiresIn as any,
    }
  );
};
