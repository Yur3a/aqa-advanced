import axios from 'axios';

// GET
export async function getPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('GET /posts', response.status, response.data.length);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

export async function getPostById(id) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(`GET /posts/${id}`, response.status, response.data);
    } catch (error) {
        console.error(`Error fetching post ${id}:`, error);
    }
}

// POST
export async function createPost(postData) {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
        console.log('POST /posts', response.status, response.data);
    } catch (error) {
        console.error('Error creating post:', error);
    }
}

getPosts();
getPostById(2);
createPost({ title: 'foo', body: 'bar', userId: 1 });
