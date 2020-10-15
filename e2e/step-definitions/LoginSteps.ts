import { binding, when } from 'cucumber-tsflow';
import * as chaiAsPromised from 'chai-as-promised';
import { expect, use } from 'chai';
import { LoginPage } from 'e2e/page-objects/LoginPage';
import { promise } from 'protractor';

@binding()
export class LoginSteps {

    page: LoginPage;
    constructor() {
        use(chaiAsPromised);
        this.page = new LoginPage();
    }

    @when(/^I logon with username "([^"]*)" with password "([^"]*)"$/)
    iLogOn(username: string, password: string): promise.Promise<any> {
        return this.page.enterCredentials(username, password);
    }
}
