import { RectEraseTool } from "../../canvas/RectEraseTool.js";
import { userGlobals } from "../../global/user.global.js";
import { elementSelector } from "../../utils/elementSelector.js";

export const initRectEraseButton = async () => {
  console.log("Something");
  try {
    const clipButton = await elementSelector<HTMLInputElement>("#rectangle-erase");
    if (!clipButton) throw new Error("Element not found.");

    clipButton.addEventListener("click", (e: Event) => {
      userGlobals.currentTool = RectEraseTool.getTool();
    });
  } catch (err: any) {
    console.error(err);
  }
};
