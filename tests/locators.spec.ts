//   import required libarary test, expect
import {test,expect}  from '@playwright/test';
//  use test  function
test(' demo blaze login page ',async({page}) =>{
// Step 1 Navigate to demoblaze Home page
await page.goto('https://www.demoblaze.com/');
// step 2 locator/search and click on log in link
//await page.locator('id=login2').click(); // appraoch 1
await page.click('id=login2');  // approach 2 
// Step 3 locate and fill username value
await page.locator('#loginusername').fill('joglekar.vivek@gmail.com');//  set value in input box
// step 4 locate and fill/type value in password
await page.fill('#loginpassword','emerson123');
//  step 5 locate and click on Log in button  use custimze xpath
await page.click('//button[normalize-space()="Log in"]');
//await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]');
// step 6 wait for logout link to be visible  
const logoutlink=   page.locator('#logout2');
await expect(logoutlink).toBeVisible({timeout:5000}); //wait for 5000 miliseconde before going next line
// Step 7 click on logout link

await page.close();

});
