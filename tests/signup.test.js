const browserObject = require('../helpers/browser');
const { SignUpPage } = require('../pages/signup');
const loginInfo = require("../projectVariables/loginCreds.json");
const userInfo = require("../projectVariables/userInfo.json");
const fs = require('fs');
const { expect } = require('chai');
const generateRandomPassword = require('../helpers/generateRandomPassword');
const { signUpSelectors } = require('../selectors/selectors');

let page, signupPage, loginPage;

before(async () => {
    browser = await browserObject.startBrowser();
    page = await browser.newPage();
    signupPage = new SignUpPage(page);

});

describe('Signup', async () => {
    it("Signup form fillup", async () => {
        await page.goto(loginInfo.url);
        await page.waitForSelector(signUpSelectors.registerButton);
        await page.click(signUpSelectors.registerButton);

        let randId = Math.floor(Math.random() * 1000);
        let email = `testuser${randId}@grr.la`;

        await signupPage.typeName(userInfo.name);
        await signupPage.typeUserName(userInfo.userName);
        await signupPage.typeMobileNumber(userInfo.mobileNumber);
        await signupPage.typeEmail(email);
        let password = generateRandomPassword();
        await signupPage.typePassword(password);
        await signupPage.typeConfirmPassword(password);
        await signupPage.clickSignupButton();

        

    })
})
afterEach("take screenshot on failure", async function () {
    if (this.currentTest.state !== "passed") {
        var titleName = this.currentTest.title + ".jpg";
        var imageFileName = titleName.split('\n')[0] + ".jpg"
        await page.screenshot({ path: 'output/' + "" + imageFileName.replace("\"", "").replace("\"", "").trim() + "" });

    }
});
after(async () => {
    await browser.close();
});