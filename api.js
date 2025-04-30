const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getPosts(limit = 10) {
    const response = await fetch(`${BASE_URL}/posts?_limit=${limit}`);
    if (!response.ok) throw new Error('Failed to load posts');
    return await response.json();
}

export async function getComments(postId, limit = 2) {
    const response = await fetch(`${BASE_URL}/posts/${postId}/comments?_limit=${limit}`);
    if (!response.ok) throw new Error('Failed to load comments');
    return await response.json();
}

export async function createPost(postData) {
    const response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
    });
    if (!response.ok) throw new Error('Failed to create post');
    return await response.json();
}
