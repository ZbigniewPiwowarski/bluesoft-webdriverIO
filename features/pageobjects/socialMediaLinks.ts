import { browser } from "@wdio/globals";
import CommonPage from "../commonobject/commonPage.ts";

class SocialMediaLinks extends CommonPage {
  public get facebookIcon() {
    return $("[href='https://www.facebook.com/BlueSoftPL']");
  }

  public get linkedinIcon() {
    return $("[href='https://www.linkedin.com/company/bluesoft/']");
  }

  public get instagramIcon() {
    return $("[href='https://www.instagram.com/bluesoft_com/']");
  }

  public get youtubeIcon() {
    return $(
      "[href='https://www.youtube.com/channel/UCUEjHOIhjxpu0QUcT663ykQ']"
    );
  }

  public get clutchIcon() {
    return $("[href='https://clutch.co/profile/bluesoft']");
  }

  public assignSelectorsToTextVariables(textVariable: string) {
    switch (textVariable) {
      case "Facebook":
        return this.facebookIcon;
      case "Linkedin":
        return this.linkedinIcon;
      case "Instagram":
        return this.instagramIcon;
      case "YouTube":
        return this.youtubeIcon;
      case "Clutch":
        return this.clutchIcon;
    }
  }
}

export default new SocialMediaLinks();
