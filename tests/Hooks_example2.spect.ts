import { test, expect } from '@playwright/test';
//  NOTE  1:-  beforeEach and afterEach add browser fixture in beforeEach
//NOTE  2:- page already created in every test cases. remove page fixture from all test case
//  create variable for page
let page;  // Global variable 
//  login -- pre condition
test.beforeEach(async ({browser})=>{
  page= await browser.newPage();
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
});
//  logout 
test.afterEach(async()=>{
//logout
await page.locator('logout2').click();
  await page.close();

});
//  Testcase 1
test('Testcase 1 HomePage', async () => {
// Home Page  count total  pages on home page
const products=await page.$$('hrefch');
expect(products).toHaveLength(9);


});


test('Testcase 2 Add product to cart test', async () => {
 
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



});

