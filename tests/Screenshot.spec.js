const { test, expect } = require('@playwright/test');


// test('page screenshots', async ({ page }) => {
//     //  step 1 open website home page
//     await page.goto('https://demo.opencart.com/');
//     //  step 2 screenshots
//    // await page.screenshot({ path:'C:\Vivek_Training\PlaywrightVivek\tests\screenshots' + 'HomePage.png' });
//    //await page.screenshot({ path:'tests/screenshots' + 'HomePage.png' });
//    await page.screenshot({ path:'tests/screenshots/' + Date.now()+ ' HomePage.png' });

//   });
//   test('page FULL screenshots', async ({ page }) => {
//     //  step 1 open website home page
//     await page.goto('https://demo.opencart.com/');
//     //  step 2 screenshots
//    // await page.screenshot({ path:'C:\Vivek_Training\PlaywrightVivek\tests\screenshots' + 'HomePage.png' });
//    //await page.screenshot({ path:'tests/screenshots' + 'HomePage.png' });
//    await page.screenshot({ path:'tests/screenshots/' + Date.now()+ ' HomePage.png',fullPage: true });

//   });

  test('page screenshots of specific element', async ({ page }) => {
    //  step 1 open website home page
    await page.goto('https://demo.opencart.com/');
    //  step 2 screenshots
   // await page.screenshot({ path:'C:\Vivek_Training\PlaywrightVivek\tests\screenshots' + 'HomePage.png' });
   //await page.screenshot({ path:'tests/screenshots' + 'HomePage.png' });


   await page.locator('//*[@id="content"]/div[2]/div[1]').screenshot({ path:'tests/screenshots/' + Date.now()+ ' Macbook.png' });

  });