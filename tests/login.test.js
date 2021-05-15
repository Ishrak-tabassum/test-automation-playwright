const browserObject = require('../helpers/browser');
const { logInPage} = require('../pages/login');
const loginInfo = require("../projectVariables/loginCreds.json");
const { expect } = require('chai');
const { loginSelectors } = require('../selectors/selectors');

let page, loginPage;

before(async () => {
    browser = await browserObject.startBrowser();
    page = await browser.newPage();
    loginPage = new logInPage(page);
});

describe('Login', async () => {
    it("`Login-1`\nRegistered user can login succesfully", async () => {
        await page.goto(loginInfo.url);
        await loginPage.logIn(loginInfo.username, loginInfo.password);

       

    })
    it("`Login-2`\nUnable to login if user gives wrong user creds", async () => {
        await page.goto(loginInfo.url);
        await loginPage.logIn(loginInfo.username, "wrong password");
        await page.waitForSelector(loginSelectors.errorXPath);
        let [errorTextElement] = await page.$$(loginSelectors.errorXPath);
        let errorText = await page.evaluate(e => e.textContent, errorTextElement);

        expect(errorText).includes("Wrong number of segments");

    })
})
afterEach("take screenshot on failure", async function() {
    if (this.currentTest.state !== "passed") {
        var titleName = this.currentTest.title + ".jpg";
        var imageFileName = titleName.split('\n')[0] + ".jpg"
        await page.screenshot({ path: 'output/' + "" + imageFileName.replace("`", "").replace("`", "").trim() + "" });

    }
});
after(async () => {
    await browser.close();
});