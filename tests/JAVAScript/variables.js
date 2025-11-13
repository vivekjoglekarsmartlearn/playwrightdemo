
// approach 2 single statement  declration+  initilization
var custid=111234567811;
//  approach 3  single line --  multiple  variables
var username='Vivek',password=1234

console.log("My salary account number is --->" +custid);
console.log(typeof(custid));

console.log("username --->"+username);
console.log(typeof(username));
console.log("My password is --->"+      password);
console.log("-----------Let-----------------------");
let txt="vivek"
console.log("  verify text is --->"+txt)
//  multile  variables in single lines
let mobile="Iphone",price=1500000
console.log("I want purchase --"+mobile+" and  price is --->"+price)

// console.log(x1);//   not declare varibale yet   undefined
// var x1=5;
// console.log(x1);
//  undefined x in var
//  OR 
// console.log(x);//   not declare varibale yet 
// let x=5;
// console.log(x);
// //  error in let
// approach 1 multiple lines
var salary; // step 1 declare variable 
salary=100000.55;// step 2 assign the value
salary=200000.55// latest value print
console.log(salary);
console.log(typeof(salary));
// const
const url="https://www.flipkart.com/";// value is fix 
console.log(url);
//url="https://www.flipcart.com/"; //  change value .try to overright value 
//console.log(url);
//  comperarion operator --  >,<,>=,<=,==
let result=100==100;//  boolean true/false
console.log(" Test case  result is --->"+result)
console.log(typeof(result));
console.log("==============================");
let firstno=100;
let secondno=50;
let myFirstName="Vivek";
let myLastName="J";
console.log(firstno+secondno);//150 
console.log(myFirstName+myLastName);//
console.log(firstno+secondno+myFirstName+myLastName);//
console.log(myFirstName+myLastName+firstno+secondno);
// BODMAS  formula
console.log(myFirstName+myLastName+(firstno+secondno));