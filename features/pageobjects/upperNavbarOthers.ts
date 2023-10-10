import { browser } from "@wdio/globals";
import CommonPage from "../commonobject/commonPage.ts";

class UpperNavbarOthers extends CommonPage {
  public get engLangIcon() {
    return $(
      'img[src="https://bluesoft.com/pl/wp-content/themes/bluesoft/images/en.svg"]'
    );
  }

  public get plLangIcon() {
    return $(
      'img[src="https://bluesoft.com/wp-content/themes/bluesoft/images/pl.svg"]'
    );
  }

  public get twojPartnerTechnologicznyH1Title() {
    return $("h1=Twój Partner Technologiczny");
  }

  public get impactingIndustryH1Title() {
    return $("h1=Impacting Industry Leaders With");
  }

  public get contactMenuItem() {
    return $("a=Contact");
  }

  public get firstNameField() {
    return $("input[name='first_name']");
  }

  public get lastNameField() {
    return $("input[name='last_name']");
  }

  public get emailField() {
    return $("input[name='email']");
  }

  public get phoneField() {
    return $("input.ignore:not([readonly])");
  }

  public get companyField() {
    return $("input[name='company']");
  }

  public get jobTitleField() {
    return $("input[name='job_title']");
  }

  public get serviceSelect() {
    return $(".ignore.field__control");
  }

  public get serviceSelectDevOps() {
    return $("li[data-value='DevOps Transformation']");
  }

  public get sendButton() {
    return $("button=Send");
  }

  public get fieldInvalid() {
    return $$(".field.field--invalid");
  }

  public assignSelectorsToTextVariables(textVariable: string) {
    switch (textVariable) {
      case "English language icon":
        return this.engLangIcon;
      case "Polish language icon":
        return this.plLangIcon;
      case "Twój Partner Technologiczny":
        return this.twojPartnerTechnologicznyH1Title;
      case "Impacting Industry Leaders With":
        return this.impactingIndustryH1Title;
      case "First name field":
        return this.firstNameField;
      case "Contact":
        return this.contactMenuItem;
      case "Last name field":
        return this.lastNameField;
      case "Email field":
        return this.emailField;
      case "Phone field":
        return this.phoneField;
      case "Company field":
        return this.companyField;
      case "Job title field":
        return this.jobTitleField;
      case "Service select":
        return this.serviceSelect;
      case "Service select DevOps":
        return this.serviceSelectDevOps;
      case "Send button":
        return this.sendButton;
      case "Field invalid":
        return this.fieldInvalid;
    }
  }
}

export default new UpperNavbarOthers();
