import { test, expect } from '@playwright/test';

test('Soft Assertion', async ({ page }) => {
    //  Step 1 goto website URL
  await page.goto('https://testautomationpractice.blogspot.com/');
  //  verify element is visible or not
 await expect(await page.locator('//*[@id="name"]')).toBeVisible(); 
 await expect(await page.locator('//*[@id="name"]')).toBeEmpty();
 await expect(await page.locator('//*[@id="name"]')).toBeEditable();
 await expect(await page.locator('//*[@id="name"]')).toBeEnabled();
//enter name
await page.locator('//*[@id="name"]','Vivek');  // approach 2
//  

await  page.waitForTimeout(5000);//  pause 5 seconds OR 5000 miliseconds
//  click on Gender Male radio button
//await  page.locator("//input[@id='male']").check();  // approach 1
await page.check("//input[@id='male']");  // approach 2  Male
//  after click Gender Male rdio button check
await expect(await  page.locator("//input[@id='male']")).toBeChecked();
await expect(await  page.locator("//input[@id='male']").isChecked()).toBeTruthy();// male radio button

await expect(await  page.locator('//*[@id="female"]').isChecked()).toBeFalsy();// female radio button

});