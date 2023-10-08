import { browser } from "@wdio/globals";
import CommonPage from "../commonobject/commonPage.js";

class CareersMenu extends CommonPage {
  public get careersMenuItem() {
    return $("a=Careers");
  }

  public get careersH1Title() {
    return $("h1*=See IT from");
  }

  public get seeOpenPositionsButton() {
    return $("a=See open positions");
  }

  public get jobSearchRecord() {
    return $(".cr-item-career");
  }

  public get searchButton() {
    return $("button=Search");
  }

  public get searchBar() {
    return $("#c_search");
  }

  public get showMoreButton() {
    return $(".cr-category.cr-category--more.js-career-more");
  }

  public get clearAllIcon() {
    return $("#ico-close");
  }

  public get jobOffersH2Title() {
    return $("h2*=Job Offers");
  }

  public get jobOffersFilters() {
    return $$(".cr-category");
  }

  public assignSelectorsToTextVariables(textVariable: string) {
    switch (textVariable) {
      case "Careers":
        return this.careersMenuItem;
      case "Careers H1":
        return this.careersH1Title;
      case "See open positions":
        return this.seeOpenPositionsButton;
      case "Job search record":
        return this.jobSearchRecord;
      case "Search":
        return this.searchButton;
      case "Search bar":
        return this.searchBar;
      case "Show more":
        return this.showMoreButton;
      case "Clear all":
        return this.clearAllIcon;
      case "Job Offers":
        return this.jobOffersH2Title;
    }
  }
}

export default new CareersMenu();
