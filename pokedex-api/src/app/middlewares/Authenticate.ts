import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";

export default function Authenticate(request: Request, response: Response, next: NextFunction){
  
  const authHeader = request.headers.authorization;
  
  if (!authHeader) {
    throw new AppError('JWT token is missing');
  }

  const [,token] = authHeader.split(' ');

  try {
    const decoded = verify(token, process.env.APP_SECRET);

    return next();
  } catch (error) {
    throw new AppError('Invalid JWT token');
  }

}
