import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';//  .. represent current project location
//  without POM code snippet
test('Pom Test', async ({ page }) => {
  //Login
    const login=new LoginPage(page);// create object of Login page class
    //  Step 1 go URL
    await login.gotoLoginPage();
    //  Step 2 login on page
    await login.login("joglekar.vivek@gmail.com","emerson123");
    await  page.waitForTimeout(5000);

  //Home 

  //cart


});







// import { test, expect } from '@playwright/test';
// //  without POM code snippet
// test('test', async ({ page }) => {
//   await page.goto('https://demoblaze.com/index.html');
//  // await page.getByRole('link', { name: 'login2' }).click();
// await page.locator('#login2').click();
//   await page.locator('#loginusername').fill('joglekar.vivek@gmail.com');
//   await page.locator('#loginpassword').fill('emerson123');
//   await page.locator('//button[normalize-space()="Log in"]').click();
  
//   await page.close();
// });