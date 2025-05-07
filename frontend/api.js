const API_URL = 'http://localhost:3000';

export async function getPosts() {
    const res = await fetch(`${API_URL}/posts`);
    return await res.json();
}

export async function createPost(title, body) {
    const res = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body }),
    });
    return await res.json();
}

export async function deletePost(postId) {
    const res = await fetch(`${API_URL}/posts/${postId}`, {
        method: 'DELETE',
    });

    if (!res.ok) {
        throw new Error('Failed to delete the post');
    }

    return await res.json();
}


export function renderPosts(posts, onDeleteClick) {
    const container = document.getElementById('posts');
    container.innerHTML = '';

    posts.forEach(post => {
        const div = document.createElement('div');
        div.style.border = '1px solid #ccc';
        div.style.padding = '1rem';
        div.style.marginBottom = '1rem';

        div.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <button data-id="${post.id}" class="delete-post">Видалити</button>
      <div class="comments" id="comments-${post.id}"></div>
    `;
        div.querySelector('.delete-post').addEventListener('click', () => onDeleteClick(post.id));
        container.appendChild(div);
    });
}

