import { test, expect } from '@playwright/test';

test('OrangeHRM login and user verification', async ({ page }) => {
  // Step 1: Navigate to the OrangeHRM login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Step 2: Find the logo by its alt text and verify it is visible
  const logo = page.getByAltText('company-branding');
  await expect(logo).toBeVisible();

  // Step 3: Fill in the login credentials using placeholder text
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  // Step 4: Click the login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 5: Wait for the user dropdown name to be visible
  const userNameLocator = page.locator('//p[@class="oxd-userdropdown-name"]');
  await expect(userNameLocator).toBeVisible();

  const firstName = (await userNameLocator.textContent())?.trim();
  console.log("Actual text is ---> " + firstName);

  if (firstName) {
    await expect(page.getByText(firstName)).toBeVisible();
  } else {
    throw new Error('User name not found or empty');
  }

});


