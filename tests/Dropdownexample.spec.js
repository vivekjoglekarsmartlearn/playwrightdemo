import { test, expect } from '@playwright/test';

test(' Handle Iframe', async ({ page }) => {
    //  Step 1 goto website URL
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForTimeout(5000);
  //  Step 2 select from drop down india
  //  multiple  way to select  value from drop down option
 //await page.locator('#country').selectOption({label:'India'}); //  lablel/visibleText  approach 1
 //await page.locator('#country').selectOption('India');
 //  approach 2   by using value from HTML DOM
 //await page.locator('#country').selectOption({value:'uk'});
 //  approach 3 by index and index start with zero and its is int 
 //await page.locator('#country').selectOption({index:1});
//  approach 4 
 //await page.selectOption("country",'India');
//  Assertions 1]  check  number of options in drop down
//const options=await page.locator('#country option')
//await expect(options).toHaveCount(10);
  // 2]  check no of  option in drop down 
//const myOptions=await page.$$('#country option');
//console.log(" Number of values in drop down ",myOptions.length);
//await expect(myOptions.length).toBe(10);
//3 ]   verify presence of value India in the drop down
const totalContent=await page.locator('#country').textContent();
await expect(totalContent.includes('test')).toBeTruthy();  //  return true/ false


 await page.waitForTimeout(5000);

});