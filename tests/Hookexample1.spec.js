
import{test,expect} from '@playwright/test'

test('Home Page test' ,async({page}) => {
    await page.goto('https://demoblaze.com/');
  // Test 1 login
  //  Step 1  click on login link
  await page.locator('#login2').click();
  // Step 2 enter valid username 
  await page.locator('#loginusername').fill("joglekar.vivek@gmail.com");
//  step 3 enter valid password
await page.locator('#loginpassword').fill("emerson123");
//  step 4 click on log in button
await page.locator('//button[normalize-space()="Log in"]').click();

//HomePage  count all product on home page
const  products=await page.$$('.hrefch');
// validatation total product must be 9
expect(products).toHaveLength(9);

//logout from website
await page.locator('#logout2').click();


})
test('Add Product to cart test' ,async({page}) => {
  await page.goto('https://demoblaze.com/');
// Test 1 login
//  Step 1  click on login link
await page.locator('#login2').click();
// Step 2 enter valid username 
await page.locator('#loginusername').fill("joglekar.vivek@gmail.com");
//  step 3 enter valid password
await page.locator('#loginpassword').fill("emerson123");
//  step 4 click on log in button
await page.locator('//button[normalize-space()="Log in"]').click();

// add product to cart
//await page.locator("//*[@id="tbodyid"]/div[1]/div/div/h4/a").click();
await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
//  click on Add to cart button
//await page.locator('//*[@id="tbodyid"]/div[2]/div/a').click();
await page.locator('//a[normalize-space()="Add to cart"]').click();
// handle dialog box
page.on('dialog', async dialog=> {
  //  verify text dailog 
 expect(dialog.message()).toContain('Product added.')
 //  accept dialog or alert()  to click OK button
 await dialog.accept();
})
//logout from website
await page.locator('#logout2').click();

})




