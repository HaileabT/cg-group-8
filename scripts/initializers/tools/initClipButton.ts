import { ClippingTool } from "../../canvas/ClippingTool.js";
import { userGlobals } from "../../global/user.global.js";
import { elementSelector } from "../../utils/elementSelector.js";

export const initClipButton = async () => {
  console.log("Something");
  try {
    const clipButton = await elementSelector<HTMLInputElement>("#clip");
    if (!clipButton) throw new Error("Element not found.");

    clipButton.addEventListener("click", (e: Event) => {
      userGlobals.currentTool = ClippingTool.getTool();
    });
  } catch (err: any) {
    console.error(err);
  }
};
