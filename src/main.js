import './styles/main.scss'; // Import SCSS
import {createPost, getComments, getPosts} from './api.js';
import {createCommentElement, createPostElement} from './dom.js';

const postsContainer = document.querySelector('#posts');
const postForm = document.querySelector('#postForm');
const message = document.querySelector('#message');

async function loadPosts() {
    try {
        const posts = await getPosts();
        posts.forEach(post => {
            const postElement = createPostElement(post);
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error(error);
    }
}

async function handleLoadComments(postId) {
    const commentsContainer = document.querySelector(`#comments-${postId}`);
    if (commentsContainer.childElementCount > 0) return;

    try {
        const comments = await getComments(postId);
        comments.forEach(comment => {
            const commentElement = createCommentElement(comment);
            commentsContainer.appendChild(commentElement);
        });
    } catch (error) {
        console.error(error);
    }
}

async function handlePostSubmit(event) {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    try {
        const newPost = await createPost({ title, body, userId: 1 });
        const postElement = createPostElement(newPost);
        postsContainer.prepend(postElement);

        message.textContent = 'Post added!';
        message.classList.add('success');
        postForm.reset();
    } catch (error) {
        console.error(error);
    }
}

postForm.addEventListener('submit', handlePostSubmit);

postsContainer.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const postId = event.target.dataset.postId;
        handleLoadComments(postId);
    }
});

loadPosts();
