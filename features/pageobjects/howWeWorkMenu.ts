import { $ } from "@wdio/globals";
import Page from "./careersMenu.js";
import CommonPage from "../commonobject/commonPage.js";

class HowWeWorkMenu extends CommonPage {
  public get howWeWorkMenuItem() {
    return $("a=How we work");
  }

  public get howWeWorkH1Title() {
    return $("h1*=How We Work");
  }

  public get noVendorSubmenuItem() {
    return $("a=No Vendor Lock-In");
  }

  public get noVendorSubmenuH2Title() {
    return $("h2*=We Work Vendor Agnostic");
  }

  public get openSourceSubmenuItem() {
    return $("a=Open Source First");
  }

  public get openSourceSubmenuH2Title() {
    return $("h2*=We Consider Open Source First");
  }

  public get fairPartnershipSubmenuItem() {
    return $("a=Fair Partnership");
  }

  public get fairPartnershipSubmenuH2Title() {
    return $("h2*=We Build Long-Term");
  }

  public get agilitySubmenuItem() {
    return $("a=Agility");
  }

  public get agilitySubmenuH2Title() {
    return $("h2*=We Work Agile");
  }

  public get crossDomainSubmenuItem() {
    return $("a=Cross-Domain Perspective");
  }

  public get crossDomainSubmenuH2Title() {
    return $("h2*=We Approach Each");
  }

  public get multiIndustryMenuItem() {
    return $("a=Multi-Industry Expertise");
  }

  public get multiIndustryH2Title() {
    return $("h2*=We Combine The Best");
  }

  public assignSelectorsToTextVariables(textVariable: string) {
    switch (textVariable) {
      case "How we work":
        return this.howWeWorkMenuItem;
      case "How We Work":
        return this.howWeWorkH1Title;
      case "No Vendor Lock-In":
        return this.noVendorSubmenuItem;
      case "We Work Vendor Agnostic":
        return this.noVendorSubmenuH2Title;
      case "Open Source First":
        return this.openSourceSubmenuItem;
      case "We Consider Open Source First":
        return this.openSourceSubmenuH2Title;
      case "Fair Partnership":
        return this.fairPartnershipSubmenuItem;
      case "We Build Long-Term":
        return this.fairPartnershipSubmenuH2Title;
      case "Agility":
        return this.agilitySubmenuItem;
      case "We Work Agile":
        return this.agilitySubmenuH2Title;
      case "Cross-Domain Perspective":
        return this.crossDomainSubmenuItem;
      case "We Approach Each":
        return this.crossDomainSubmenuH2Title;
      case "Multi-Industry Expertise":
        return this.multiIndustryMenuItem;
      case "We Combine The Best":
        return this.multiIndustryH2Title;
    }
  }
}

export default new HowWeWorkMenu();
