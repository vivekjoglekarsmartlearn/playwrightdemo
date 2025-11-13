const { Given, When, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');

setDefaultTimeout(60 * 1000);

let browser, context, page;

Before(async () => {
  browser = await chromium.launch({ headless: false }); // set to true if you don't want UI
  context = await browser.newContext();
  page = await context.newPage();
});

After(async () => {
  await browser.close();
});

Given('I am on the DemoBlaze homepage', async () => {
  await page.goto('https://www.demoblaze.com/', { waitUntil: 'domcontentloaded' });
});

When('I log in with valid credentials', async () => {
  // Click login button
  await page.click('#login2');
  
  // Wait for login modal
  await page.waitForSelector('#logInModal', { state: 'visible' });
  
  // Fill username and password
  await page.fill('#loginusername', 'joglekar.vivek@gmail.com'); // <-- replace with your username
  await page.fill('#loginpassword', 'emerson123'); // <-- replace with your password

  // Click login
  await page.click('button[onclick="logIn()"]');

  // Wait for modal to close and user to appear
  await page.waitForSelector('#nameofuser', { timeout: 15000 });
});

Then('I should see the welcome message with my username', async () => {
  const welcomeText = await page.textContent('#nameofuser');
  expect(welcomeText).toContain('Welcome joglekar.vivek@gmail.com');
});






// const { Given, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
// const { chromium } = require('playwright');
// const { expect } = require('@playwright/test');

// setDefaultTimeout(60 * 1000); // increase step timeout

// let browser, context, page;

// Before(async () => {
//   browser = await chromium.launch({ headless: true });
//   context = await browser.newContext();
//   page = await context.newPage();
// });

// After(async () => {
//   await browser.close();
// });

// Given('I open the Playwright homepage', async () => {
//   await page.goto('https://playwright.dev/', { waitUntil: 'domcontentloaded' });
// });

// Then('the title should contain {string}', async (titlePart) => {
//   const title = await page.title();
//   expect(title).toContain(titlePart);
// });
