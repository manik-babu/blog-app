import { Request, Response } from "express";


const addLike = async (req: Request, res: Response) => {
    try {
        //
    } catch (error: any) {
        console.error('Server error: ', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error!',
            errors: error.message
        });
    }
}

const likeController = {
    addLike,
}
export default likeController;