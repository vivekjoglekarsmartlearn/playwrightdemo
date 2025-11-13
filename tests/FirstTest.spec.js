
 const{test,expect}= require('@playwright/test')

 test('HomePage',async({page})=>{

await page.goto('https://www.demoblaze.com/')

const actualPageTitle=page.title();
console.log(actualPageTitle);

await expect(page).toHaveURL('STORE');
const pageURL=page.url;
console.log(' page URL  is --->',pageURL);
await expect(page).toHaveURL('https://www.demoblaze.com/');

await page.close();

 });