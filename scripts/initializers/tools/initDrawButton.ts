import { DrawTool } from "../../canvas/DrawTool.js";
import { userGlobals } from "../../global/user.global.js";
import { elementSelector } from "../../utils/elementSelector.js";

export const initDrawButton = async () => {
  console.log("Something");
  try {
    const drawButton = await elementSelector<HTMLInputElement>("#draw");
    if (!drawButton) throw new Error("Element not found.");

    drawButton.addEventListener("click", (e: Event) => {
      userGlobals.currentTool = DrawTool.getTool();
    });
  } catch (err: any) {
    console.error(err);
  }
};
