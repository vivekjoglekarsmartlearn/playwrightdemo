import{test,expect}  from '@playwright/test'
//const{test,expect} =require('@playwright/test')
test('page screenshots', async ({ page }) => {
  // Step 1: Navigate to test site
  await page.goto('https://demo.opencart.com/');
  await page.waitForTimeout(5000); // Wait 5000 milliseconds before proceeding
//  capture  screen of page
//await page.screenshot({ path: 'C:\Vivek_Training\PlaywrightVivek\tests\screenshots\myhomepage.png', fullPage: true });
//                            folder              +filename.png
//await page.screenshot({ path: 'tests\screenshots+'+'myhomepage.png', fullPage: true });//  approach 1
await page.screenshot({ path: 'tests\screenshots+'+Date.now()+'myhomepage.png', fullPage: true });// approach 2

  await page.close(); // Close the page
});
