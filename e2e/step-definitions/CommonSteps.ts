import { expect, use } from 'chai';
import { binding, given, then, when } from 'cucumber-tsflow';
import * as chaiAsPromised from 'chai-as-promised';
import { browser, promise } from 'protractor';
import { CommonPage } from '../page-objects/commonPage';

@binding()
  export class CommonSteps {

    constructor() {
      use(chaiAsPromised);
    }

    @given(/^I navigate to automation practice site$/)
    iNavigateToSite(): promise.Promise<any> {
      return browser.waitForAngularEnabled(false)
        .then(() => browser.get(browser.baseUrl, 12000));
    }

    @when(/^I navigate to the "([^"]*)" section$/)
    INavigateToWomensSection(section: string): promise.Promise<any> {
      return CommonPage.navigateTosection(section);
    }

    @then(/^I should see the page heading as "([^"]*)"$/)
    iSeePageHeading(title: string): promise.Promise<any> {
      return expect(CommonPage.getPageTitle()).to.eventually.contain(title);
    }

    }

