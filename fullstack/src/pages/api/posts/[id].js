import { posts } from "../../../../data/posts";

export default function handler(req, res) {
    const {
        query: { id},
        method,
    } = req;

    if (method === 'GET') {
        const post = posts.find((p) => p.id === parseInt(id));
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({error: 'Post not found'});
        }
    } else {
        res.status(405).json({error: 'Method not allowed'});
    }
} 