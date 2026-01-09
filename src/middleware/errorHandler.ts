import { NextFunction, Request, Response } from "express";
import CustomError from "../helper/customError";

const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 500;
    let statusMessage = "Something went wrong!"

    if (error instanceof CustomError.NotFoundError) {
        statusCode = 404;
        statusMessage = error.message;
    }
    else if (error instanceof CustomError.PermissionError) {
        statusCode = 403;
        statusMessage: error.message;
    }


    res.status(statusCode).json({
        message: statusMessage,
        error: error
    })
}

export default globalErrorHandler;