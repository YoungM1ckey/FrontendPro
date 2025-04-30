export function createPostElement(post) {
    const div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button data-post-id="${post.id}">Load comments</button>
        <div class="comments" id="comments-${post.id}"></div>
    `;
    return div;
}

export function createCommentElement(comment) {
    const div = document.createElement('div');
    div.classList.add('comment');
    div.innerHTML = `
        <strong>${comment.name}</strong> (${comment.email})
        <p>${comment.body}</p>
    `;
    return div;
}
