import { NextFunction, Request, Response } from "express"
import { auth as betterAuth } from '../lib/auth';

const auth = (...roles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const session = await betterAuth.api.getSession({
            headers: req.headers as any
        })
        console.log(session)
        if (!roles.includes(session?.user.role!)) {
            console.log("Not authorized!")
            return;
        }
        next();
    }
}

export default auth;