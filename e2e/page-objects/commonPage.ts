import {browser, by, element, ElementFinder, ExpectedConditions, promise} from 'protractor';


  export class CommonPage {

      private static womenSectionNavigation = element(by.css('a[title="Women"]'));

      static waitAndClickElement(elm: ElementFinder): promise.Promise <any> {
        const isElementPresent = ExpectedConditions.visibilityOf(elm);
        const isElementClickable = ExpectedConditions.elementToBeClickable(elm);
        return browser.wait(ExpectedConditions.and(isElementPresent, isElementClickable), 10000)
          // //.then(() => this.moveToElement(elm))
          .then(() => elm.click());
      }

      static moveToElement(elm: ElementFinder): promise.Promise <void> {
        return browser.executeScript(arguments[0].scrollIntoView(), elm);
      }

      static waitForElementToBeVisible(elm: ElementFinder): promise.Promise<any> {
        return browser.wait(ExpectedConditions.visibilityOf(elm), 10000);
      }

      static navigateTosection(section: string): promise.Promise<any> {
        const elm = element(by.cssContainingText('a', `${section}`));
        return this.waitAndClickElement(elm);
      }

      static getPageTitle(): promise.Promise<string> {
        const elm = element(by.css(`h1.page-heading`));
        return this.waitForElementToBeVisible(elm).then(() => elm.getText());
      }
    }

