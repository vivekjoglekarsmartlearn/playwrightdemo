//   import required libarary test, expect
import {test,expect}  from '@playwright/test';
//  use test  function
test(' Locate Multiple elements  ',async({page}) =>{
// Step 1 Navigate to demoblaze Home page
await page.goto('https://www.demoblaze.com/');
// step 2 find all the links on page using common tag name a for links
     const   links=await page.$$('a');
     // print all links total count using legnth function/method
      console.log(links.length);

 // Step 3 use for loop  Extract  and print text content of each link
 //  let i=0  ---> initlization or Start point
// i<links.length ---  condition OR end point
// i++  OR i=i+1  --increment increrase the value by 1 
 for(let i=0;i<links.length;i++)
 {
    const text=await links[i].innerText();
    console.log(`link+ ${i+1} :${text.trim()}`);
    //  trim function cut extra space before and after value 
 }
/*
for(const link of links)
{
   const linkText=await link.textContent();
   console.log(linkText);
}*/



await page.close();

});
