import {createPost, deletePost, getPosts, renderPosts} from './api.js';

async function loadPosts() {
    const posts = await getPosts();
    renderPosts(posts, handleDeletePost);
}


async function handleDeletePost(postId) {
    try {
        console.log(`Deleting post with ID: ${postId}`);

        await deletePost(postId);
        await loadPosts();
    } catch (error) {
        console.error("Error deleting post:", error);
        alert("Failed to delete the post.");
    }
}


document.getElementById('post-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const body = document.getElementById('body').value.trim();

    if (!title || !body) return;

    await createPost(title, body);
    e.target.reset();
    await loadPosts();
});

loadPosts();
