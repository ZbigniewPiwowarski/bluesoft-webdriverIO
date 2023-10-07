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

Given(/^I accept cookies$/, async () => {
  await CommonPage.acceptCookiesButton.click();
});
