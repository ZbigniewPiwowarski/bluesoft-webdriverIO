import { browser } from "@wdio/globals";
import CommonPage from "../commonobject/commonPage";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class SocialMediaLinks extends CommonPage {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  public open(path: string) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`);
  }
}

export default new SocialMediaLinks();
