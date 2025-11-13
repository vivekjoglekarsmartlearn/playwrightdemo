//   import required libarary test, expect
import {test,expect}  from '@playwright/test';
//  use test  function
test('Soft Assertion example',async({page}) =>{
// Step 1 Navigate to demoblaze Home page
await page.goto('https://www.demoblaze.com/');
//  1  expect(page).toHaveURL()  page has URL
// Hard Assert - by default settings
//await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
//await expect(page).toHaveTitle('mytitle');
//await expect(page.locator('navbar-brand')).toBeVisible();//  verify logo is  visible 
// "Soft Assert" - if any steps Fail then Keep  running rest of steps and wont terminate steps
await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register');
await expect.soft(page).toHaveTitle('mytitle');
await expect.soft(page.locator('navbar-brand')).toBeVisible();//  verify logo is  visible 



await page.close();

});
