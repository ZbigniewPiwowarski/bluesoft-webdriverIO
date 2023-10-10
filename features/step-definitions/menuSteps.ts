import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import commonPage from "../commonobject/commonPage.ts";
const CommonPage = new commonPage();
import OthersMenu from "../pageobjects/othersMenu.ts";
import HowWeWorkMenu from "../pageobjects/howWeWorkMenu.ts";
import CareersMenu from "../pageobjects/careersMenu.ts";
import SocialMediaLinks from "../pageobjects/socialMediaLinks.ts";
import UpperNavbarBlog from "../pageobjects/upperNavbarBlog.ts";

interface Pages {
  [key: string]: any;
}

const pages: Pages = {
  main: CommonPage,
  howWeWork: HowWeWorkMenu,
  othersMenu: OthersMenu,
  careersMenu: CareersMenu,
  socialMediaLinks: SocialMediaLinks,
  upperNavbarBlog: UpperNavbarBlog,
};

Given(/^I am on the "(\w+)" page$/, async (page) => {
  await pages[page].open();
});

Given(/^Start new browser session$/, async () => {
  await browser.reloadSession();
});

When(
  /^I hover (.+) menu item and I click (.+) from page "(.+)"$/,
  async (menuitem, item, page) => {
    await pages[page].assignSelectorsToTextVariables(menuitem).moveTo();
    await pages[page].assignSelectorsToTextVariables(item).click();
  }
);

When(/^I click "(.+)" menu item from page "(.+)"$/, async (menuitem, page) => {
  await pages[page].assignSelectorsToTextVariables(menuitem).click();
});

Then(/^I should see "(.+)" h1 title from page "(.+)"$/, async (title, page) => {
  await expect(
    await pages[page].assignSelectorsToTextVariables(title)
  ).toBeDisplayed();
});

// Careers page specific steps:

When(/^I click all jobs offer filters$/, async () => {
  // workaround to not encounter click interception error
  await browser.execute(() => {
    document.querySelector(".sticky-container")?.remove();
  });

  for (let i = 0; i < (await CareersMenu.jobOffersFilters).length - 1; i++) {
    if (await CareersMenu.jobOffersFilters[i].isDisplayed()) {
      await (await CareersMenu.jobOffersFilters)[i].click();
    }
  }
});
