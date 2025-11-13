// const { test, expect } = require('@playwright/test');
const { test, expect, chromium } = require('@playwright/test');
const exp = require('constants');

test('Handle Pages/Windows', async () => {

  // Step 1: Launch the Chromium browser instance
  const browser = await chromium.launch();

  // Step 2: Create a new browser context (like a separate browser profile)
  const context = await browser.newContext();

  // Step 3: Open the first new tab (page)
  const page1 = await context.newPage();
  // Step 4: Open another new tab (page)
  const page2 = await context.newPage();

  //step 5: count all pages in browser context( browser profile)
   const allPages=         context.pages();
    console.log(" No of pages created :- " ,allPages.length);
    //step6: goto website url
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//step 7: verify page title
 await expect(page1).toHaveTitle("OrangeHRM");
//step 8: goto website url 2
await page2.goto("https://www.orangehrm.com/");
await expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");



  // Step 5: Close the browser
  await browser.close();
});
