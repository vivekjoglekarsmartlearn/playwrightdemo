import { test, expect } from '@playwright/test';
const xlsx=require('xlsx');
//test('Login data driven', async ({ page }) => {
   ( async ({ page }) => { 
   //  set excel file path  and read the file 
const workbook=xlsx.readFile("C:\\Vivek_Training\\data.xlsx");
//  store and pick  index
const sheetName=workbook.SheetNames[0];
// store sheet Name
const sheet=workbook.SheetNames["Sheet1"];
//  read data and convert into JSON  file
const data=xlsx.utils.sheet_to_json(sheet);
// // launch browser
// const browser=await chromium.launch();
// const page=await browser.newPage();
await page.goto('https://demoblaze.com/index.html');

for( const user of data)
{
   await page.waitForTimeout(5000);
    // await page.getByRole('link', { name: 'login2' }).click();
   await page.locator('#login2').click();
     await page.locator('#loginusername').fill(user.Username);
     await page.locator('#loginpassword').fill(user.Password);
     await page.locator('//button[normalize-space()="Log in"]').click();
     await page.waitForTimeout(5000);
}
await page.close();
})  ();