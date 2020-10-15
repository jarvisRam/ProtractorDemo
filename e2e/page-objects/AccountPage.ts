import { by, element, promise } from 'protractor';
import { CommonPage } from './commonPage';

export class AccountPage {

    private pageHeadingElement;

    constructor() {
        this.pageHeadingElement  = element(by.css('h1.page-heading'));
    }

    getAccountPageHeading(): promise.Promise<string> {
        return CommonPage.waitForElementToBeVisible(this.pageHeadingElement)
            .then(() => this.pageHeadingElement.getText());
    }
}
