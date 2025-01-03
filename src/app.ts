import logger from "./logger";
import "reflect-metadata";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import createHttpError, { HttpError } from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import authRouter from "./routes/auth";
const app = express()

app.get("/", (req, res) => {
    // const err = createHttpError(401, "you can not access error");
    // throw err;
    res.status(201).send("welcome to pizza hub");
})

app.use("/auth", authRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err : HttpError, req : Request, res : Response, next : NextFunction)=>{
       logger.error(err.message);
       const statusCode = err.statusCode || 500;

       
       res.status(statusCode).json({
          error : [
             {
                type : err.name,
                msg : err.message,
                path : '',
                location : ''
             },
          ],
       })
})
export default app;