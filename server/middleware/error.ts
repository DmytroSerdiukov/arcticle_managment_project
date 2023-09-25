import { Request, Response } from 'express'

export const globalExceptionLayer = async (
  error: any,
  req: Request,
  res: Response,
  next: any
) => {
  error.statusCode = error.statusCode || 500
  error.status = error.status || 'error'
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.status,
  })
}
