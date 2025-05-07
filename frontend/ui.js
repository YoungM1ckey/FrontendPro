export function createPostElement(post, onDeleteClick) {
    const div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button data-id="${post.id}" class="delete-post">Видалити</button>
    `;

    const deleteButton = div.querySelector('.delete-post');
    deleteButton.addEventListener('click', () => onDeleteClick(post.id));

    return div;
}