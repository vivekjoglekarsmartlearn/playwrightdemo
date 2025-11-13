import { test, expect } from '@playwright/test';

test('Handle checkbox', async ({ page }) => {
  // Step 1: Navigate to test site
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForTimeout(5000); // wait 5000 milliseconds before proceeding
/*//  Step 2 seelct from drop down value India 
//await page.locator("#country").selectOption({label:'India'});// label/ visible  OR
//await page.locator("#country").selectOption('India');//  visible text
   await page.waitForTimeout(5000);
// approach 2 by value from HTML DOM
//await page.locator("#country").selectOption({value:'uk'});
// approach 3  use by index
//await page.locator("#country").selectOption({index:1});//  canada*/

await page.selectOption("#country",'India');// by text
//  Assertions options
// approach  1 verify  number of value in drop down
 const myoptions=   await page.locator('#country option');
await expect(myoptions).toHaveCount(10);//  use to count total number of elements
// approach 2   check number of options in drop down 
const  options=await page.$$('# country option');
console.log(" Total  options/values --->",options.length);
await expect(options.length).toBe(10);
//  verify  presence of value in the drop down 
const content=  await page.locator("#country").textContent();//  extract all the text from  drop down  as String format . ""
await expect(content?.includes('India')).toBeTruthy();//  true or false
await page.waitForTimeout(5000);



  await page.close();
});
