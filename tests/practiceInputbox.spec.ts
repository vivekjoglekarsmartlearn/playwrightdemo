import { test, expect } from '@playwright/test';

test('Soft Assertion example', async ({ page }) => {
  // Step 1: Navigate to test site
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForTimeout(5000);

  // Textbox assertions and operations
  const nameInput = page.locator('#name');
  await expect(nameInput).toBeVisible();
  await expect(nameInput).toBeEmpty();
  await expect(nameInput).toBeEditable();
  await nameInput.fill('vivek');

  await page.waitForTimeout(5000);

  // Click on radio button "Male"
  const maleRadio = page.locator('#male');
  await maleRadio.check();
  await page.waitForTimeout(5000);
  await expect(maleRadio).toBeChecked();

  // Optional: Double-check using isChecked()
  const isChecked = await maleRadio.isChecked();
  expect(isChecked).toBeTruthy();

  await page.close();
});
