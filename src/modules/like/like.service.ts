import { prisma } from "../../lib/prisma"


const like = async (postId: string, userId: string) => {
    const post = await prisma.post.findUnique({
        where: {
            id: postId
        },
        select: {
            id: true
        }
    });

    if (!post) {
        return null;
    }
    try {
        await prisma.like.delete({
            where: {
                likeId: {
                    postId,
                    authorId: userId
                }
            }
        });
        return {
            message: "Unliked"
        }
    } catch (error) {
        await prisma.like.create({
            data: {
                postId,
                authorId: userId
            }
        });
        return {
            message: "liked"
        }
    }
}

const likeService = {
    like,
}
export default likeService;