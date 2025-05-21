import { Request, Response, NextFunction } from 'express';

// Intermediar front e back 
export default function middlewareLog(req:Request, res:Response, next:NextFunction) {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method}  ${req.originalUrl}`)
  next();
}
