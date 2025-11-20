export async function getPosts() {
    try {
        return fetch('/api/posts/all')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch posts');
                }
                return res.json();
            });
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export async function getPostById(id: number) {
    try {
        const response = await fetch(`/api/posts/id/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        return response.json();
    } catch (error) {
        console.error('Error fetching post:', error);
        throw error;
    }
}