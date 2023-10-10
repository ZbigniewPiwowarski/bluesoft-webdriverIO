import { browser } from "@wdio/globals";
import CommonPage from "../commonobject/commonPage.ts";

class UpperNavbarBlog extends CommonPage {
  public get blogMenu() {
    return $("a=Blog");
  }

  public get blogMenuExpertsVoice() {
    return $("a=Expert's Voice");
  }

  public get blogPlatformEngineering() {
    return $("a=Platform Engineering");
  }

  public get blogAgile() {
    return $("a=Agile");
  }

  public get blogApiManagement() {
    return $("a=API Management");
  }

  public get blogBusinessInteligence() {
    return $("a=Business Inteligence");
  }

  public get blogCloud() {
    return $("a=Cloud");
  }

  public get blogData() {
    return $("a=Data");
  }

  public get blogDevOps() {
    return $("a=DevOps");
  }

  public get blogDigitalTransformation() {
    return $("a=Digital Transformation");
  }

  public get blogRoboticProcessAutomation() {
    return $("a=Robotic Process Automation");
  }

  public get blogSystemIntegration() {
    return $("a=System Integration");
  }

  public get blogQualityAssurance() {
    return $("a=Quality Assurance");
  }

  public get blogPlatformEngineeringH1Title() {
    return $("h1=Platform Engineering");
  }

  public get blogAgileH1Title() {
    return $("h1=Agile");
  }

  public get blogApiManagementH1Title() {
    return $("h1=API Management");
  }

  public get blogBusinessInteligenceH1Title() {
    return $("h1=Business Inteligence");
  }

  public get blogCloudH1Title() {
    return $("h1=Cloud");
  }

  public get blogDataH1Title() {
    return $("h1=Data");
  }

  public get blogDevOpsH1Title() {
    return $("h1=DevOps");
  }

  public get blogDigitalTransformationH1Title() {
    return $("h1=Digital Transformation");
  }

  public get blogRoboticProcessAutomationH1Title() {
    return $("h1=Robotic Process Automation");
  }

  public get blogSystemIntegrationH1Title() {
    return $("h1=System Integration");
  }

  public get blogQualityAssuranceH1Title() {
    return $("h1=Quality Assurance");
  }

  public assignSelectorsToTextVariables(textVariable: string) {
    switch (textVariable) {
      case "Blog":
        return this.blogMenu;
      case "Expert's Voice":
        return this.blogMenuExpertsVoice;
      case "Platform Engineering":
        return this.blogPlatformEngineering;
      case "Agile":
        return this.blogAgile;
      case "API Management":
        return this.blogApiManagement;
      case "Business Inteligence":
        return this.blogBusinessInteligence;
      case "Cloud":
        return this.blogCloud;
      case "Data":
        return this.blogData;
      case "DevOps":
        return this.blogDevOps;
      case "Digital Transformation":
        return this.blogDigitalTransformation;
      case "Robotic Process Automation":
        return this.blogRoboticProcessAutomation;
      case "System Integration":
        return this.blogSystemIntegration;
      case "Quality Assurance":
        return this.blogQualityAssurance;
      case "Platform Engineering H1 Title":
        return this.blogPlatformEngineeringH1Title;
      case "Agile H1 Title":
        return this.blogAgileH1Title;
      case "API Management H1 Title":
        return this.blogApiManagementH1Title;
      case "Business Inteligence H1 Title":
        return this.blogBusinessInteligenceH1Title;
      case "Cloud H1 Title":
        return this.blogCloudH1Title;
      case "Data H1 Title":
        return this.blogDataH1Title;
      case "DevOps H1 Title":
        return this.blogDevOpsH1Title;
      case "Digital Transformation H1 Title":
        return this.blogDigitalTransformationH1Title;
      case "Robotic Process Automation H1 Title":
        return this.blogRoboticProcessAutomationH1Title;
      case "System Integration H1 Title":
        return this.blogSystemIntegrationH1Title;
      case "Quality Assurance H1 Title":
        return this.blogQualityAssuranceH1Title;
    }
  }
}

export default new UpperNavbarBlog();
