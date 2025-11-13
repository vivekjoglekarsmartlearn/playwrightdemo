//   import required libarary test, expect
import {test,expect}  from '@playwright/test';
//  use test  function
test(' Open Facebook and verify URL or TItle of page ',async({page}) =>{
// Step 1 Navigate to Facebook Home page
await page.goto('https://www.facebook.com/');

// Step 2 verify page url
await expect(page).toHaveURL(/facebook\.com/);
//  actualpageURL   user define variable name
// PageTransitionEvent inbuilt class to fetch page information
const currentActualUrl=page.url();
console.log(' Actual current page url is --->',currentActualUrl);
// Step 3 verify page title
// fetch page title in run timeand store into variable as actual page title and compare with actual page title 
//  cont datatype help to store value
// title  is user define variable name 
const title=await page.title();
console.log('Actual page title is  --->' ,title);  // use comma , join statment and variable name 
expect(title).toContain('Facebook'); // toContain is method verify patriculat String /text is part whole string
//  close the page
await page.close();

});
