//   import required libarary test, expect
import {test,expect}  from '@playwright/test';
//  use test  function
test('Assertion practice ',async({page}) =>{
// Step 1 Navigate to demoblaze Home page
await page.goto('https://demo.nopcommerce.com/register');
//  1  expect(page).toHaveURL()  page has URL
await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
// step 2 verify page title
await expect(page).toHaveTitle('nopCommerce demo store. Register');
//  capature element  and store into variable
  const logoElement=  await page.locator('.header-logo');
  //  verify logo/ image is visible or not
await expect(logoElement).toBeVisible();
//  verify element search store inbox is enable or not
//  store search box css selector into variable
const searchBox=await page.locator('#small-searchterms');
await expect(searchBox).toBeEnabled();
// verify Male radio button checked
const maleRadioButton=await page.locator('#gender-male');
await maleRadioButton.click()  //click on Male radio button
await expect(maleRadioButton).toBeChecked();// true
//  verify checkbox newssletter is checked
const newsletterCheckbox=await page.locator('#Newsletter');
await expect(newsletterCheckbox).toBeChecked();// True

// verify atttribute type on register button on page. toHaveAttribute() method provide attribute name and value
const  regButton=page.locator('#register-button');
await expect(regButton).toHaveAttribute('type','submit');
//7.  expect(locator).toHaveText()  element matched  Full text
await expect(await page.locator('div[class="page-title"] h1')).toHaveText('Register');
//8.  expect(locator).toContainText()  element contains text  and partial match
await expect(await page.locator('div[class="page-title"] h1')).toContainText('Regi'); 




await page.close();

});
