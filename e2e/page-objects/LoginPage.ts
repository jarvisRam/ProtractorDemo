import { by, element, ElementFinder, promise } from 'protractor';
import { CommonPage } from './commonPage';

export class LoginPage {
    private loginUsername;
    private loginPassword;
    private loginBtn;
    private signInBtn;

    constructor() {
        this.loginUsername = element(by.id('email'));
        this.loginPassword = element(by.id('passwd'));
        this.loginBtn = element(by.id('SubmitLogin'));
        this.signInBtn = element(by.css('a.login'));
    }

    enterCredentials(userName: string, password: string): promise.Promise<any> {
        return CommonPage.waitForElementToBeVisible(this.loginUsername)
            .then(() => this.loginUsername.clear())
            .then(() => this.loginUsername.sendKeys(userName))
            .then(() => this.loginPassword.clear())
            .then(() => this.loginPassword.sendKeys(password))
            .then(() => CommonPage.waitAndClickElement(this.loginBtn));
    }

    clickSignInBtn(): promise.Promise<void> {
        return CommonPage.waitAndClickElement(this.signInBtn);
    }

}
