const signUpSelectors = {
    nameSelector: "#mat-input-4",
    userNameSelector: "#mat-input-5",
    mobileNumberSelector: "#mat-input-6",
    emailSelector: "#mat-input-7",
    passwordSelector: "#mat-input-8",
    confirmPasswordSelector: "#mat-input-9",
    signUpButton: "span.button-text",
    signupSelector: "span.mat-button-wrapper",
    registerButton: "a.link"

}
const loginSelectors = {
    emailUserNameLogin: "#mat-input-2",
    passwordSelectorLogin:"#mat-input-3",
    loginButton:"span.button-text",
    errorXPath:"#toast-container"
}


module.exports = { signUpSelectors, loginSelectors}