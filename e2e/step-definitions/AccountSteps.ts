
import * as chaiAsPromised from 'chai-as-promised';
import { expect, use } from 'chai';
import { binding, then } from 'cucumber-tsflow/dist';
import { promise } from 'protractor';
import { AccountPage } from '../page-objects/AccountPage';

@binding()
export class AccountSteps {
    page: AccountPage;
    constructor() {
        use(chaiAsPromised);
        this.page = new AccountPage();
    }

    @then(/^I should see "([^"]*)" page$/)
    iSeePageHeading(title: string): promise.Promise<any> {
        return expect(this.page.getAccountPageHeading()).to.eventually.equal(title);
    }

}
