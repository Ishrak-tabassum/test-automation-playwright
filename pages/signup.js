const { signUpSelectors } = require('../selectors/selectors');



class SignUpPage {
    constructor(page) {
        this.page = page;
        
    }
    async typeName(name) {
        await this.page.waitForSelector(signUpSelectors.nameSelector);
        await this.page.type(signUpSelectors.nameSelector, name);
    }
    async typeUserName(userName) {
        await this.page.waitForSelector(signUpSelectors.userNameSelector);
        await this.page.type(signUpSelectors.userNameSelector, userName);
    }
    async typeMobileNumber(mobileNumber) {
        await this.page.waitForSelector(signUpSelectors.mobileNumberSelector);
        await this.page.type(signUpSelectors.mobileNumberSelector, mobileNumber);
    }
    async typeEmail(email) {
        await this.page.waitForSelector(signUpSelectors.emailSelector);
        await this.page.type(signUpSelectors.emailSelector, email);
    }
    async typePassword(password) {
        await this.page.waitForSelector(signUpSelectors.passwordSelector);
        await this.page.type(signUpSelectors.passwordSelector, password);
    }
    async typeConfirmPassword(confirmPassword) {
        await this.page.waitForSelector(signUpSelectors.confirmPasswordSelector);
        await this.page.type(signUpSelectors.confirmPasswordSelector,confirmPassword);
    }
    
  
    async clickSignupButton() {
        await this.page.waitForSelector(signUpSelectors.signUpButton);
        await this.page.click(signUpSelectors.signUpButton);
    }

}

module.exports = { SignUpPage, signUpSelectors }