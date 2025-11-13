//  step  1 include playwright module
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    //  step 3  goto given website url
await page.goto('https://www.demoblaze.com/index.html');
//  Step 4 capature the page title 
const    actualPageTitle=page.title();
   // var    actualPageTitle=page.title();
// Step 5  print the page title using console.log()  method
console.log('Actual page title  is --->' ,actualPageTitle);
//  step 6 validate the page title 
await expect(page).toHaveTitle('STORE');  // provide expected value
// approach 1 to fetch page URL
await expect(page).toHaveURL('https://www.demoblaze.com/index.html');//   validate page URL 
// approach 2  to fecth URL of page
const pageURL =page.url();
console.log('  actual page URL --->',pageURL);
// step 7 close the  page opened by playwright tool
await page.close();

});