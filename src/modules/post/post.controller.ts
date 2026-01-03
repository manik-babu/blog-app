import { Request, Response } from "express";
import postService from "./post.service";

const createPost = async (req: Request, res: Response) => {
    try {
        const result = await postService.createPost(req.body, req.user?.id as string);

        res.status(201).json({
            message: 'Post created successfully',
            data: result
        });
    } catch (error: any) {
        console.error('Server error: ', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error!',
            errors: error.message
        });
    }
}

const postController = {
    createPost,
}

export default postController;