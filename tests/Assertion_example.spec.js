//  step  1 include playwright module
const { test, expect } = require('@playwright/test');
const exp = require('constants');

test(' AssertionTest', async ({ page }) => {
    //  step 2  goto given website url
page.goto('https://demo.nopcommerce.com/register');
// step  3  verify page URL
await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
// step 4 verify the page title
await expect(page).toHaveTitle('nopCommerce demo store. Register');
//  step 5  element is visible
const logoElement=await page.locator('//img[@alt="nopCommerce demo store"]');
await expect(logoElement).toBeVisible();

// step 5 verify lement enabled()
const searchBox=await page.locator('#small-searchterms');
await expect(searchBox).toBeEnabled();
// Step  6 click on radio button , store in variable and verify wether radio button is click/checked()
const malaeRadioButton=await page.locator('#gender-male');
await malaeRadioButton.click();
await expect(malaeRadioButton).toBeChecked();
//  step  6 verify newletter checkbox
const newsletterCheckbox=await page.locator('Newsletter');
await expect(newsletterCheckbox).toBeChecked();
//  step 7  verify button attribute
const regButton=await page.locator('#register-button');
await expect(regButton).toHaveAttribute('type','submit');
// step  8  tohaveText()    full valid text
await expect(page.locator('//h1[normalize-space()="Register"]')).toHaveText('Register');
//and toHavecontainText()  provide partial text
await expect(page.locator('//h1[normalize-space()="Register"]')).toContainText('Reg');
// step  9 expect(locator).toHaveValue(value) input  have  a value

const emailInput=await page.locator('//input[@id="Email"]') //  identify email editbox
emailInput.fill('joglekar.vivek@gmail.com');// type or fill value
await expect(emailInput).toHaveValue('joglekar.vivek@gmail.com');

})

