
const{test,expect}= require('@playwright/test')
// how to use only
//test.only('test1',async({page})=>{
//console.log(' this is test 1');
//});
//  skip without any condition
//test.skip('test2',async({page})=>{
  //  console.log(' this is test 2');
//});
// how to use Skip  based on condition  browsername is bromium then skip
//test('test3',async({page,browserName})=>{
//console.log(' this is test 3');
// if(browserName=="chromium")
//     {
//         test.skip()
//     }

// });    
//  fixme
// test('test4',async({page})=>{
//     test.fixme();
// console.log(' this is test 4');
// });
//  Fail  how to  use Fail annotation
// test('test5',async({page})=>{
//     test.fail();
// console.log(' this is test 5');
// // add assertion 
// expect(1).toBe(10);//  if actual   and expcted fail then tets case Pass

// });
// fail test case based ocndition
// test('test6',async({page,browserName})=>{
//     console.log(' this is test 6');
//     if(browserName=="chromium")
//     {
//     test.fail();  // expected
//     }


// });

test('test7',async({page})=>{
   // test.slow();//  automatically timeout become 3 times dusring seconds 
    test.setTimeout(5000);
    console.log(' this is test 7');
   await page.goto('https://www.sapnaonline.com/');

});