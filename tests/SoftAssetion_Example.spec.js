import { test, expect } from '@playwright/test';

test('Soft Assertion', async ({ page }) => {
    //  Step 1 goto website URL
  await page.goto('https://demoblaze.com/');
  //  Step 2 Hasrd Assertion
//await expect(page).toHaveTitle('STORE123');//  verify Title
//await expect(page).toHaveURL('https://demoblaze.com/');// verify  HAVEURL
//await expect(page.locator('navbar-brand')).toBeVisible();//  verify image is Visible()

await expect.soft(page).toHaveTitle('STORE123');//  verify Title
await expect.soft(page).toHaveURL('https://demoblaze.com/');// verify  HAVEURL
await expect.soft(page.locator('navbar-brand')).toBeVisible();//  verify image is Visible()






});