

const {test,expect}=require('@playwright/test')

test('Built locators playwright',async({page})=>{
//  step 1 goto url
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//  Step  2 store logo image
const logo=await page.getByAltText('company-branding');
// step 3 verify logo is visible
await expect(logo).toBeVisible();
//  Step 4  use method getByPlaceholder()  to input in Username  feild
await page.getByPlaceholder('Username').fill('Admin');
// step 5  enter password method getByPlaceholder
await page.getByPlaceholder('Password').fill("admin123");
//Step  6  click on button
await page.getByRole('button',{type:'Submit'}).click();
// step 7 verify text 'Sahid Patel'  visible 
const firstName=await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
await expect(await page.getByText(firstName)).toBeVisible();


})