class CustomError extends Error {
  statusCode: any
  status: any
  isOperational: boolean
  constructor(message: any, statusCode: any) {
    super(message)
    this.statusCode = statusCode
    this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error'

    this.isOperational = true

    Error.captureStackTrace(this, this.constructor)
  }
}

export default CustomError
