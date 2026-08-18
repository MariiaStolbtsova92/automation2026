import { test, expect } from "@playwright/test"

test('Get all posts', async ({ request} ) => {
   const response = await request.get('https://jsonplaceholder.typicode.com/posts/');
//    console.log(response.status());
//    console.log(await response.json());
   const posts = await response.json();
   const firstPost = posts[0];
   expect(response.status()).toBe(200);
   console.log(posts);
   expect(posts).toHaveLength(100);
   expect(firstPost.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
})


test('Create new post', async ({ request} ) => {
   const response = await request.post('https://jsonplaceholder.typicode.com/posts/', { 
        data: {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
    });
  //console.log(response);
   const createdPost = await response.json()
   expect(response.status()).toBe(201);
   //console.log(await response.json());
   expect(createdPost.title).toBe('foo');
   expect(createdPost.body).toBe('bar');
   expect(createdPost.userId).toBe(1);
})



test('Create new post2', async ({ request} ) => {
   const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,     
   }
   
    const response = await request.post('https://jsonplaceholder.typicode.com/posts/', { 
        data: newPost
    });

   
   const createdPost = await response.json()
   expect(response.status()).toBe(201);
   expect(createdPost.title).toBe(newPost.title);
   expect(createdPost.body).toBe(newPost.body);
   expect(createdPost.userId).toBe(newPost.userId);
})


test('Update a post', async ({ request} ) => {
   const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,     
   }
   
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/5', { 
        data: newPost
    });

   
   const updatePost = await response.json();
   //console.log(createdPost);
   expect(response.status()).toBe(200);
   expect(updatePost.title).toBe(newPost.title);
   expect(updatePost.body).toBe(newPost.body);
   expect(updatePost.userId).toBe(newPost.userId);
})


test('Delete a post', async ({ request} ) => {
   const response = await request.delete('https://jsonplaceholder.typicode.com/posts/5');
   expect(response.status()).toBe(200);
})