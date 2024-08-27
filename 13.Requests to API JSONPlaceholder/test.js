import axios from 'axios';
import jest from '@jest/globals';
const { test, expect } = jest;

// // GET
// export async function getPosts() {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         console.log('GET /posts', response.status, response.data.length);
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//     }
// }

// export async function getPostById(id) {
//     try {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
//         console.log(`GET /posts/${id}`, response.status, response.data);
//     } catch (error) {
//         console.error(`Error fetching post ${id}:`, error);
//     }
// }

// // POST
// export async function createPost(postData) {
//     try {
//         const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
//         console.log('POST /posts', response.status, response.data);
//     } catch (error) {
//         console.error('Error creating post:', error);
//     }
// }

// getPosts();
// getPostById(2);
// createPost({ title: 'foo', body: 'bar', userId: 1 });


// test("Get all users", async () => {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
//         validateStatus: function (status) {
//             return true; // Always return true, regardless of status code
//         },
//     });
//     // console.log(response.data);
//     console.log(response.status);

//     expect(response.status).toEqual(200);
// });

test("Get all book list", async () => {
  const response = await axios.get("https://demoqa.com/bookstore/v1/books", {
    validateStatus: function (status) {
      return true; // Always return true, regardless of status code
    },
  });
  console.log(response.data);
  expect(response.status).toEqual(200); // Asserting if the response code is 200
  expect(response.data.books).toHaveLength(8);
  expect(response.data.books[0].title).toBe("Git Pocket Guide");
});

test("Verify if the user is registered", async () => {
  const response = await axios.post(
    `https://bookstore.toolsqa.com/Account/v1/Authorized`,
    {
      userName: "michael-testuser",
      password: "52hPed%s",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
      // validateStatus: function (status) {
      //   return true; // Always return true, regardless of status code
      // },
    }
  );
  console.log(response.data);
  expect(response.status).toEqual(200); // Asserting if the response code is 200
  expect(response.data).toBeTruthy(); // Asserting if the response code is 200
});


test("Get token", async () => {
  const response = await axios.post(
    `https://bookstore.toolsqa.com/Account/v1/GenerateToken`,
    {
      userName: "michael-testuser",
      password: "52hPed%s",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response.data);
  // expect(response.status).toEqual(200); // Asserting if the response code is 200
  // expect(response.data).toBeTruthy(); // Asserting if the response code is 200
});
