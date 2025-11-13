//import { test, expect } from '@playwright/test';
const{test,expect} =require('@playwright/test')
test('Handling Alert dialog', async ({ page }) => {
  // Step 1: Navigate to test site
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForTimeout(5000); // Wait 5000 milliseconds before proceeding

  // Handle Alert dialog window
  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('alert'); // Validate dialog type
    expect(dialog.message()).toContain('I am an alert box!'); // Validate dialog message
    await dialog.accept(); // Click OK to accept the alert
  });

  // Click the alert button to trigger alert dialog
  await page.click('//button[@onclick="myFunction()"]'); // More reliable than ID 'alertBtn'

  await page.waitForTimeout(5000); // Optional wait to observe the result

  await page.close(); // Close the page
});
