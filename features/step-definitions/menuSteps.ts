import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import commonPage from "../commonobject/commonPage.ts";
const CommonPage = new commonPage();
import MenuOthers from "../pageobjects/menuOthers.ts";

interface Pages {
  [key: string]: any;
}

const pages: Pages = {
  main: CommonPage,
};

Given(/^I am on the "(\w+)" page$/, async (page) => {
  await pages[page].open();
});

When(/^I hover (.+) menu item and I click (.+)$/, async (menuitem, item) => {
  await MenuOthers.assignSelectorsToTextVariables(menuitem).moveTo();
  await MenuOthers.assignSelectorsToTextVariables(item).click();
});

When(/^I click "(.+)" menu item$/, async (menuitem) => {
  await MenuOthers.assignSelectorsToTextVariables(menuitem).click();
});

Then(/^I should see (.+) h1 title$/, async (title) => {
  expect(
    await MenuOthers.assignSelectorsToTextVariables(title)
  ).toBeDisplayed();
});
