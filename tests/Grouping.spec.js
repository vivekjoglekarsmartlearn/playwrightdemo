
import { test, expect } from '@playwright/test';

test.beforeAll(async() =>{   //  pre condition
console.log('this is before All hook Browser open ');
});
test.afterAll(async() =>{   //  post condition
    console.log('this is after All hook Browser close ');
      });
test.beforeEach(async() =>{   //  pre condition
console.log('this is before  hook login ');
});
test.afterEach(async() =>{   //  post condition
    console.log('this is before  hook logout ');
    console.log("------------------------------");
    });
test.describe.skip('Regression Pack' ,()=>{
    test('Test1', async ({ page }) => {
        console.log("  This is my search test  Testcase1");
    });
    
    test('Test2', async ({ page }) => {
        console.log("  This is my shopping cart test  Testcase2");
    });
})
test.describe('Sanity pack' ,()=>{
  test('Test3', async ({ page }) => {
    console.log("  This is my payment test  Testcase3");
});
test('Test4', async ({ page }) => {
    console.log("  This is my gpay  Testcase4");
});

})




