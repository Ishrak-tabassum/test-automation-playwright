const { signUpSelectors, loginSelectors } = require('../selectors/selectors');

class logInPage {
    constructor(page) {
        this.page = page;

    }
    async typeEmailName(name) {
        await this.page.waitForSelector(loginSelectors.emailUserNameLogin);
        await this.page.type(loginSelectors.emailUserNameLogin, name);
    }
    async typePassword(password) {
        await this.page.waitForSelector(loginSelectors.passwordSelectorLogin);
        await this.page.type(loginSelectors.passwordSelectorLogin, password);
    }
    async clickLoginButton() {
        await this.page.waitForSelector(loginSelectors.loginButton);
        await this.page.click(loginSelectors.loginButton);
    }
    async logIn(name, password) {
        await this.typeEmailName(name);
        await this.typePassword(password);
        await this.clickLoginButton();
    }

}

module.exports = { logInPage }