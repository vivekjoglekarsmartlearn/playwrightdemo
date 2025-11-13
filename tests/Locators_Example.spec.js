
//  step 1
const {test, expect } = require("@playwright/test");
//import {test,expect}  from '@playwright/test'
// step 2  create test block 
test('Locators examples',async({page})=>{
//  Step  3 goto website URL
await page.goto('https://www.demoblaze.com/index.html');
//  step 4 click on login in link
//await page.locator('id=login2').click();
await page.click('id=login2');
await test.setTimeout(5000);
//  step 5 enter username css
//await page.locator('#loginusername').fill('joglekar.vivek@gmail.com');  OR
await page.fill('#loginusername','joglekar.vivek@gmail.com');
//  step 6 enter password css
//await test.setTimeout(5000);
//await page.locator('#loginpassword').fill('vivek123');  // OR
//await page.fill("//input[@id='loginpassword']",'joglekar.vivek@gmail.com');  OR
//Step 7 click   on Log in button
await page.click("//button[normalize-space()='Log in']");
//await page.locator('#loginpassword').type('vivek123');
//await test.setTimeout(5000);//  fix time
 // Step 8  click on logout link
//await page.click('#logInModal > div > div > div.modal-footer > button.btn.btn-primary');//  OR
//  verify logout  link is present
//await  page.click("(//a[normalize-space()='Log out'])[1]");
const logoutLink=await  page.locator("(//a[normalize-space()='Log out'])[1]");

await expect(logoutLink).toBeVisible();

// step 9  close the page
await  page.close();

});