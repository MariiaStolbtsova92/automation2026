import test, { expect } from "@playwright/test";
import { testUser1 } from "../test-data/validUsers";

test('Get all brands', async ({ request }) => {
    const response = await request.get('/api/cars/brands');
    const responseJson = await response.json();
    const brands = responseJson.data;
    // console.log(response);
    // console.log(brands);
    expect(response.status()).toBe(200);
    expect(brands).toHaveLength(5);
})


test('Get all models', async ({ request }) => {
    const response = await request.get('/api/cars/models');
    const responseJson = await response.json();
    const models = responseJson.data;
    //console.log(models);
    expect(response.status()).toBe(200);
    expect(models).toHaveLength(23);
})

test('Sign in', async({ request }) => {
    // console.log('------Storage state Before------');
    // console.log(await request.storageState());
    // console.log('------Storage state Before------');
    const response = await request.post('api/auth/signin', {
        data: {
            "email": testUser1.email,
            "password": testUser1.password,  
        }

    })
    const sid = response.headers()['set-cookie'].split(';')[0];
    expect(response.status()).toBe(200);
    expect(sid).toContain('sid=')

    // console.log('------Storage state after------');
    // console.log(await request.storageState());
    // console.log('------Storage state after------');

    //console.log(response);
    //console.log(response.headers()['set-cookie'])
    // console.log(console.log(response.headers()['set-cookie'].split(';')[0])

})

// test('Add new car', async ({ request }) => {
//     const response = await request.post('/api/cars/', {
//         data:{
//         "carBrandId": 3,
//         "carModelId": 11,
//         "mileage": 123
//         }
//     });
    
//     console.log(response);

// })