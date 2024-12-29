import { EraserTool } from "../../canvas/EraserTool.js";
import { userGlobals } from "../../global/user.global.js";
import { elementSelector } from "../../utils/elementSelector.js";

export const initEraseButton = async () => {
  console.log("Something");
  try {
    const eraseButton = await elementSelector<HTMLInputElement>("#erase");
    if (!eraseButton) throw new Error("Element not found.");

    eraseButton.addEventListener("click", (e: Event) => {
      userGlobals.currentTool = EraserTool.getTool();
    });
  } catch (err: any) {
    console.error(err);
  }
};
