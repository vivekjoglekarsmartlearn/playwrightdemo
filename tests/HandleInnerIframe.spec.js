import { test, expect } from '@playwright/test';

test(' Handle Iframe', async ({ page }) => {
    //  Step 1 goto website URL
  await page.goto('https://ui.vision/demo/webtest/frames/');
  await page.waitForTimeout(5000);
  //  verify element is visible or not
//  Step 2  Handle iframe
const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

  //type name in editbox frame
await frame3.locator("input[name='mytext3']").fill('Vivek'); 
await page.waitForTimeout(5000); // wait for 5000 mili seconds before going lext line
//  nested frame
const myChildFrame=await frame3.childFrames();//  array variable
childFrames[0].locator('//*[@id="i5"]/div[3]/div').check();



});