// Step 1
const { test, expect } = require('@playwright/test');
//  step 2 
test(' Locaate all link MultipleElements', async ({ page }) => {
    //  step 3 goto page URL
  await page.goto('https://www.demoblaze.com/index.html');
//  step 4  extract all links on apge

   const links=    await page.$$('a');
//  step 5  use for each loop to extract all URLs

for (const link of links)
{
    // extract each link text on page
   const linkText= await  link.textContent(); //  return link text
   console.log(linkText);
}

  
});