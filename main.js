const postsContainer = document.querySelector('#posts');
const postForm = document.querySelector('#postForm');
const successMessage = document.querySelector('#successMessage');

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const posts = await response.json();

    posts.forEach(post => {
        createPostElement(post);
    });
}

// Створення HTML елементу поста
function createPostElement(post) {
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <button onclick="loadComments(${post.id}, this)">Load comments</button>
    <div class="comments" id="comments-${post.id}"></div>
  `;
    postsContainer.appendChild(postEl);
}

async function loadComments(postId, button) {
    const commentsContainer = document.querySelector(`#comments-${postId}`);

    if (commentsContainer.childElementCount > 0) {
        commentsContainer.innerHTML = '';
        button.textContent = "Load comments";
        return;
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`);
    const comments = await response.json();

    comments.forEach(comment => {
        const commentEl = document.createElement('div');
        commentEl.classList.add('comment');
        commentEl.innerHTML = `
      <strong>${comment.name}</strong> (<a href="mailto:${comment.email}">${comment.email}</a>)
      <p>${comment.body}</p>
    `;
        commentsContainer.appendChild(commentEl);
    });

    button.textContent = "Hide comments";
}

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();

    if (!title || !body) {
        alert('All fields must be filled!');
        return;
    }

    const newPost = {
        title,
        body,
        userId: 1
    };

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newPost)
    });

    const createdPost = await response.json();

    successMessage.textContent = 'Post created!';
    setTimeout(() => successMessage.textContent = '', 3000);

    createPostElement(createdPost);

    postForm.reset();
});
fetchPosts();
