import { browser } from "@wdio/globals";

export default class CommonPage {
  public get selectorExample() {
    return $("example");
  }

  public get selectorExample2() {
    return $$("example");
  }

  public get acceptCookiesButton() {
    return $("//*[@id='body']/div[3]/div/div/div/div[2]/button[3]");
  }

  public async open(path: string) {
    await browser.url(`https://bluesoft.com/${path}`);
    await this.waitForWebPageToLoad();
  }

  public assignSelectorsToTextVariables(textVariable: string) {
    switch (textVariable) {
      case "Example":
        return this.selectorExample;
      case "Example2":
        return this.selectorExample2;
    }
  }

  public waitForWebPageToLoad() {
    return browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Webpage was not fully loaded",
      }
    );
  }
}
