const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

const posts = [
    {
        "userId": 1,
        "id": 13,
        "title": "et doloremque nulla",
        "completed": false
    },
    {
        "userId": 10,
        "id": 199,
        "title": "numquam repellendus a magnam",
        "completed": true
    },
    {
        "userId": 10,
        "id": 200,
        "title": "ipsam aperiam voluptates qui",
        "completed": false
    }
];

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/posts/:id', (req, res) => {
    const postId = +req.params.id;
    const post = posts.find(post => post.id === postId);

    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ error: 'Not Found' });
    }
});

app.post('/posts', (req, res) => {
    const { title, body } = req.body;

    if (!title || !body) {
        return res.status(400).json({ error: 'Title and body are required' });
    }

    const newPost = {
        id: Date.now(),
        title,
        body,
        completed: false,
        userId: 1
    };

    posts.push(newPost);
    return res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
    const postId = +req.params.id;
    const { title, body, completed } = req.body;

    const postIndex = posts.findIndex(post => post.id === postId);

    if (postIndex === -1) {
        return res.status(404).json({ error: 'Not Found' });
    }

    if (!title || body === undefined || completed === undefined) {
        return res.status(400).json({ error: 'Not all information given' });
    }

    posts[postIndex] = {
        ...posts[postIndex],
        title,
        body,
        completed
    };

    res.status(200).json(posts[postIndex]);
});

app.delete('/posts/:id', (req, res) => {
    const postId = +req.params.id;
    const postIndex = posts.findIndex(post => post.id === postId);

    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }

    posts.splice(postIndex, 1);
    res.json({ message: 'Post deleted' });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
