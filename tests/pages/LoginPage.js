exports.LoginPage=  //  use this class methods to another class 
//  step 1 create class keep constrcutor of class to intialze all page object elements  OR locator
class LoginPage{
    constructor(page){
            this.page=page;
            this.loginLink="login2";
            this.usernameInput="#loginusername";
            this.passwordInput="#loginpassword";
            this.loginButton='//button[normalize-space()="Log in"]';
    }
// Step 2 create each opertion cross.  methods
    async gotoLoginPage()
    {
        await this.page.goto('https://demoblaze.com/index.html');
    }

    async login(username,password)
    {
        await this.page.locator( this.loginLink).click();
          await this.page.locator( this.usernameInput).fill(username);
           await this.page.locator(this.passwordInput).fill(password);
          await this.page.locator(this.loginButton).click();
    }





}