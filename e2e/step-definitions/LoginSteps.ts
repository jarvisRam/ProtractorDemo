import { binding, when } from 'cucumber-tsflow';
import * as chaiAsPromised from 'chai-as-promised';
import { expect, use } from 'chai';
import { promise } from 'protractor';
import { LoginPage } from '../page-objects/LoginPage';

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
