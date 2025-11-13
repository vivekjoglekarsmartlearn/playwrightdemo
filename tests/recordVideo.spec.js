import { test, expect } from '@playwright/test';

test('test  record', async ({ page }) => {
  await page.goto('https://www.rediff.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.locator('#login1').fill('vivek.joglekar');

  await page.locator('#password').click();

  await page.locator('#password').fill('vivek123');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.locator('Sign in')).toBeVisible();
  
});