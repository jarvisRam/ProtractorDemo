import { After, Before } from "cucumber"
import { browser } from "protractor"

After(function (scenario) {
  const world = this;
  if (scenario.result.status === 'failed') {
    return browser.takeScreenshot().then((screenshot) =>
      this.attach(screenshot, "image/png"));
  }
});
