import { test, expect } from '@playwright/test';

test('Testcase 1 HomePage', async ({ page }) => {
  // Step 1: Navigate to test site
  await page.goto('https://www.demoblaze.com/');
  await page.waitForTimeout(5000); // wait 5000 milliseconds before proceeding
    // login
    // click on login link
await page.locator('#login2').click();
//  eter valid user name
await page.locator('#loginusername').fill('joglekar.vivek@123');
//enter valid password 
await page.locator('#loginpassword').fill('emerson123');
//  click on login button
await page.locator('//button[normalize-space()="Log in"]').click();
// Home Page  count total  pages on home page
const products=await page.$$('hrefch');
expect(products).toHaveLength(9);

//logout
await page.locator('logout2').click();
  await page.close();
});


test('Testcase 2 Add product to cart test', async ({ page }) => {
  // Step 1: Navigate to test site
  await page.goto('https://www.demoblaze.com/');
  await page.waitForTimeout(5000); // wait 5000 milliseconds before proceeding
// login
   // click on login link
await page.locator('#login2').click();
//  eter valid user name
await page.locator('#loginusername').fill('joglekar.vivek@123');
//enter valid password 
await page.locator('#loginpassword').fill('emerson123');
//  click on login button
await page.locator('//button[normalize-space()="Log in"]').click();
//  add product to cart
//  click on Samsung galaxy s 6  link
await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
// click on add to cart button
await page.locator('//a[normalize-space()="Add to cart"]').click();
//  handle Alert OR JAVA script pop window
page.on('dialog',async dialog=>{
expect(dialog.message()).toContain('Product Added.')
// click on OK button to accept alert/ dialog
await dialog.accept();

})


 //logout
await page.locator('logout2').click();
  await page.close();
});

