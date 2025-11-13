import { test, expect } from '@playwright/test';

test('Handle checkbox', async ({ page }) => {
  // Step 1: Navigate to test site
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForTimeout(5000); // wait 5000 milliseconds before proceeding

  // Step 2: Check Monday checkbox
  const mondayCheckbox = page.locator("//input[@id='monday' and @type='checkbox']");
  await mondayCheckbox.check();

  // Step 3: Verify Monday checkbox is checked
  await expect(mondayCheckbox).toBeChecked();

  // Step 4: Verify Sunday checkbox is not checked
  const sundayCheckbox = page.locator("//input[@id='sunday' and @type='checkbox']");
  await expect(sundayCheckbox).not.toBeChecked();

  // Optional: Handle multiple checkboxes if needed
  // Example: Check all day checkboxes
  
  const allCheckboxes = page.locator("input[type='checkbox']");
  const count = await allCheckboxes.count(); //  count all checkboxes from the page 
  for (let i = 0; i < count; i++) {
    const checkbox = allCheckboxes.nth(i);
    // If check boxes is not checked then ONLY check
    if (!(await checkbox.isChecked())) {
      await checkbox.check();//  perform check 
    }
  }
  

  await page.close();
});
