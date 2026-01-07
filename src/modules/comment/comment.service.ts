import { prisma } from "../../lib/prisma";


const addComment = async (payload: { content: string, postId: string, parentId?: string }, userId: string) => {
    const post = await prisma.post.findUnique({
        where: {
            id: payload.postId
        },
        select: {
            id: true
        }
    });

    if (!post) {
        return null;
    }
    if (payload.parentId) {
        const parentComment = await prisma.comment.findUnique({
            where: {
                id: payload.parentId
            },
            select: {
                id: true
            }
        });
        if (!parentComment) {
            return undefined;
        }
    }

    return await prisma.comment.create({
        data: {
            ...payload,
            authorId: userId
        }
    })
}

const commentService = {
    addComment,
}

export default commentService;