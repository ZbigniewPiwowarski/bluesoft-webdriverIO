import { $ } from "@wdio/globals";
import Page from "./careersMenu.js";
import CommonPage from "../commonobject/commonPage.js";

class OthersMenu extends CommonPage {
  // What we do
  public get whatWeDoMenuItem() {
    return $("a=What we do");
  }

  public get industriesMenuItem() {
    return $("a=Industries");
  }

  public get servicesMenuItem() {
    return $("a=Services");
  }

  public get competenciesMenuItem() {
    return $("a=Competencies");
  }

  public get technologiesMenuItem() {
    return $("a=Technologies");
  }

  public get industriesH1Title() {
    return $("h1*=we understand your business");
  }

  public get servicesH1Title() {
    return $("h1*=Surpass Your Competitors");
  }

  public get competenciesH1Title() {
    return $("h1*=From Digital Transformation");
  }

  public get technologiesH1Title() {
    return $("h1*=200 Technologies");
  }

  // Our projects
  public get ourProjectsMenuItem() {
    return $("a=Our projects");
  }

  public get caseStudiesMenuItem() {
    return $("a=Case studies");
  }

  public get productsMenuItem() {
    return $("a=Products");
  }

  public get clientsMenuItem() {
    return $("a=Clients");
  }

  public get caseStudiesH1Title() {
    return $("h1*=We Deliver Excellence");
  }

  public get productsH1Title() {
    return $("h1*=Advance Your Business");
  }

  public get clientsH1Title() {
    return $("h1*=We Build Strong Relationships");
  }

  // Our team, Shape the future

  public get ourTeamMenuItem() {
    return $("a=Our team");
  }

  public get ourTeamH1Title() {
    return $("h1*=Our Team Of Movers");
  }

  public get shapeTheFutureMenuItem() {
    return $("a=Shape the future");
  }

  public get shapeTheFutureH1Title() {
    return $("h1*=We Can Make A Difference");
  }

  public assignSelectorsToTextVariables(textVariable: string) {
    switch (textVariable) {
      case "What we do":
        return this.whatWeDoMenuItem;
      case "Industries":
        return this.industriesMenuItem;
      case "Services":
        return this.servicesMenuItem;
      case "Competencies":
        return this.competenciesMenuItem;
      case "Technologies":
        return this.technologiesMenuItem;
      case "we understand your business":
        return this.industriesH1Title;
      case "Surpass Your Competitors":
        return this.servicesH1Title;
      case "From Digital Transformation":
        return this.competenciesH1Title;
      case "200 Technologies":
        return this.technologiesH1Title;
      case "Our projects":
        return this.ourProjectsMenuItem;
      case "Case studies":
        return this.caseStudiesMenuItem;
      case "Products":
        return this.productsMenuItem;
      case "Clients":
        return this.clientsMenuItem;
      case "We Deliver Excellence":
        return this.caseStudiesH1Title;
      case "Advance Your Business":
        return this.productsH1Title;
      case "We Build Strong Relationships":
        return this.clientsH1Title;
      case "Our team":
        return this.ourTeamMenuItem;
      case "Our Team Of Movers":
        return this.ourTeamH1Title;
      case "Shape the future":
        return this.shapeTheFutureMenuItem;
      case "We Can Make A Difference":
        return this.shapeTheFutureH1Title;
    }
  }
}

export default new OthersMenu();
