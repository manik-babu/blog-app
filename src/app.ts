import express, { Application, Request, Response } from 'express';
import { toNodeHandler } from "better-auth/node";
import { auth } from './lib/auth';

const app: Application = express();

// better auth
app.use(express.json());
app.use(express.urlencoded());
app.all('/api/auth/*splat', toNodeHandler(auth));


app.get('/', async (req: Request, res: Response) => {
    res.json({
        message: "Hello world"
    });
})


export default app;