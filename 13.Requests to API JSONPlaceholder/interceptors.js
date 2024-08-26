import axios from 'axios';
import { getPosts } from './test.js';
import { getPostById } from './test.js';
import { createPost } from './test.js';


axios.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
});

axios.interceptors.response.use(response => {
    console.log('Response:', response);
    return response;
}, error => {
    console.error('Response Error:', error);
    return Promise.reject(error);
});

getPosts();
getPostById(1);
createPost({ title: 'foo', body: 'bar', userId: 1 });
