import { Post } from "../../../generated/prisma/client"
import { prisma } from "../../lib/prisma"

const createPost = async (payload: Pick<Post, "caption" | "status" | "attachment">, userId: string) => {
    const createdPost = await prisma.post.create({
        data: {
            caption: payload.caption,
            status: payload.status,
            attachment: payload.attachment,
            authorId: userId
        }
    })

    return createdPost;
}

const postService = {
    createPost,
}
export default postService;