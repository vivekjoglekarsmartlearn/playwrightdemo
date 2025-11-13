//  without using POM framework
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






//logout
await page.locator('logout2').click();
  await page.close();
});
