import { test, expect } from '@playwright/test';

// ✅ TC001 - GET Request
test('GET /api/users?page=2 should return 200', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2');
  // validate get request status 200 
  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log('GET Response body:', body);
});

// ✅ TC002 - POST Request
test('POST /api/users should return 201', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'Vivek',
      job: 'QA'
    },
    headers: {
      "x-api-key": "reqres-free-v1" // not mandatory for reqres.in, but included if needed
    }
  });

  expect(response.status()).toBe(201);/// validate status code
  const body = await response.json();
  console.log('POST Response:', body);
  expect(body.name).toBe('Vivek');//  validate name
  expect(body.job).toBe('QA');// validate job
});

// ✅ TC003 - PUT Request (Update user)
test('PUT /api/users/2 should return 200 and update data', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/2', {
    //  request payload
    data: {
      name: 'Vivek Updated',
      job: 'QA Lead'
    },  //  header auth
     headers: {
      "x-api-key": "reqres-free-v1" // not mandatory for reqres.in, but included if needed
    }
  });

  expect(response.status()).toBe(200);// validate status  code
  const body = await response.json();
  console.log('PUT Response:', body);// print whole  response
  expect(body.name).toBe('Vivek Updated');//  validate update name
  expect(body.job).toBe('QA Lead');//  validate update job
});



test('DELETE /api/users/2 should return 204', async ({ request }) => {
  //  delete  request of cutomer id=2
  const response = await request.delete('https://reqres.in/api/users/2', {
    headers: {
      "x-api-key": "reqres-free-v1"
    }
  });

  console.log('DELETE status code:', response.status());
  expect(response.status()).toBe(204);// validate  status code
});


// // ✅ TC004 - DELETE Request
// test('DELETE /api/users/2 should return 204', async ({ request }) => {
//   const response = await request.delete('https://reqres.in/api/users/2');
//   expect(response.status()).toBe(204); // Reqres returns 204 No Content for successful delete

  
// });


// import { test, expect } from '@playwright/test';
// import { request } from 'http';
// //  TC001 GET Request
// test('GET /api/users/2 should return 200', async ({ request }) => {
//   // Step 1 send GET Request
//   const response = await request.get('https://reqres.in/api/users?page=2');

//   //Step  2 Validate response status
//   expect(response.status()).toBe(200);

//   // Step  3 Optional: log or validate body
//   const body = await response.json();
//   console.log('Response body:', body);

  
// });
// //TC002  POST  create user request and status code 201
// test('POST /api/users should return 201', async ({ request }) => {
//   //  Step 1 send POST  request
//   const response = await request.post('https://reqres.in/api/users', {
//     // Step 2 send request body/payload
//     data: {
//       name: 'Vivek',
//       job: 'QA'
//     },
//     headers:{
//       "x-api-key":"reqres-free-v1"
//     }
//   });

//   //Step 3  Validate response status
//   expect(response.status()).toBe(201);

// });


// //TC003  PUT  Update user data request and status code 200
// test(" Update user id -2 name,job data", async({request}) =>{


  
// })

// //TC004  Delete user id  2 data and status code 200
// test(" Delete user id -2  data", async({request}) =>{


  
// })