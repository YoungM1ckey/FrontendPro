const postsContainer = document.querySelector('#posts');
const postForm = document.querySelector('#postForm');
const message = document.querySelector('#message');

fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        posts.forEach(function(post) {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button data-post-id="${post.id}">Load comments</button>
        <div class="comments" id="comments-${post.id}"></div>
      `;
            postsContainer.appendChild(postElement);
        });
    })
    .catch(function(error) {
        console.error('Error load posts:', error);
    });

postsContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const postId = event.target.getAttribute('data-post-id');
        const commentsContainer = document.querySelector('#comments-' + postId);

        if (commentsContainer.childElementCount > 0) {
            return;
        }

        fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments?_limit=2')
            .then(function(response) {
                return response.json();
            })
            .then(function(comments) {
                comments.forEach(function(comment) {
                    const commentElement = document.createElement('div');
                    commentElement.classList.add('comment');
                    commentElement.innerHTML = `
            <strong>${comment.name}</strong> (${comment.email})
            <p>${comment.body}</p>
          `;
                    commentsContainer.appendChild(commentElement);
                });
            })
            .catch(function(error) {
                console.error('Error post loading:', error);
            });
    }
});

postForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(newPost) {
            message.textContent = 'Post added!';
            message.classList.add('success');

            const newPostElement = document.createElement('div');
            newPostElement.classList.add('post');
            newPostElement.innerHTML = `
      <h3>${newPost.title}</h3>
      <p>${newPost.body}</p>
      <button data-post-id="${newPost.id}">Load comments</button>
      <div class="comments" id="comments-${newPost.id}"></div>
    `;
            postsContainer.prepend(newPostElement);

            postForm.reset();
        })
        .catch(function(error) {
            console.error('Error creating post:', error);
        });
});
