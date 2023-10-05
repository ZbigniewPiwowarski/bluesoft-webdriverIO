import { $ } from "@wdio/globals";
import CommonPage from "../commonobject/commonPage";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MenuOthers extends CommonPage {
  /**
   * define selectors using getter methods
   */
  public get flashAlert() {
    return $("#flash");
  }
}

export default new MenuOthers();
