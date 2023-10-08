import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import commonPage from "../commonobject/commonPage.ts";
import HowWeWorkMenu from "../pageobjects/howWeWorkMenu.ts";
import OthersMenu from "../pageobjects/othersMenu.ts";
import CareersMenu from "../pageobjects/careersMenu.ts";
import socialMediaLinks from "../pageobjects/socialMediaLinks.ts";
const CommonPage = new commonPage();

interface Pages {
  [key: string]: any;
}

const pages: Pages = {
  main: CommonPage,
  howWeWork: HowWeWorkMenu,
  othersMenu: OthersMenu,
  careersMenu: CareersMenu,
  socialMediaLinks: socialMediaLinks,
};

Given(/^I accept cookies$/, async () => {
  await CommonPage.acceptCookiesButton.click();
});

Given(/^I scroll to the top of the page$/, async () => {
  await browser.execute("window.scrollTo(0, 0)");
});

When(/^I click "(.+)" from page "(.+)"$/, async (item, page) => {
  await pages[page].assignSelectorsToTextVariables(item).click();
});

When(
  /^I type "(.+)" word into text field "(.+)" from page "(.+)"$/,
  async (word, item, page) => {
    await pages[page].assignSelectorsToTextVariables(item).setValue(word);
  }
);

When(/^I scroll into view "(.+)" on page "(.+)"$/, async (item, page) => {
  await pages[page].assignSelectorsToTextVariables(item).scrollIntoView();
  await browser.pause(2000);
});

Then(/^I should see "(.+)" from page "(.+)"$/, async (item, page) => {
  await expect(
    await pages[page].assignSelectorsToTextVariables(item)
  ).toBeDisplayed();
});

Then(/^I should not see "(.+)" from page "(.+)"$/, async (item, page) => {
  await expect(
    await pages[page].assignSelectorsToTextVariables(item)
  ).not.toBeDisplayed();
});

Then(/^I should see second window opened with title "(.+)"$/, async (title) => {
  await expect(await browser.getWindowHandles()).toHaveLength(2);

  const windowHandles = await browser.getWindowHandles();
  // switch to second window
  await browser.switchToWindow(windowHandles[1]);
  await browser.waitUntil(async () => (await browser.getTitle()) !== " ", {
    timeout: 5000,
    timeoutMsg: "expected browser title",
  });

  expect(await browser.getTitle()).toContain(title);
});

Then(/^I should see second window opened with URL "(.+)"$/, async (url) => {
  await expect(await browser.getWindowHandles()).toHaveLength(2);

  const windowHandles = await browser.getWindowHandles();
  // switch to second window
  await browser.switchToWindow(windowHandles[1]);
  expect(await browser.getUrl()).toContain(url);
});
