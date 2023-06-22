import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const secretKey: string = "randomKey";

const checkToken = async (req: Request, res: Response, next: NextFunction) => {
  const tokenHeader = req.header("Authorization");
  if (!tokenHeader) return res.status(401).json({ message: "unauthenticated" });

  const token = tokenHeader.split(" ")[1];
  const decodedToken = jwt.verify(token, secretKey) as any;
  if (!decodedToken)
    return res.status(401).json({ message: "invalid or expired token" });
  return next();
};

export default checkToken;
