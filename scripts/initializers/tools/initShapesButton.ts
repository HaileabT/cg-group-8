import { ShapeTool } from "../../canvas/ShapeTool.js";
import { appGlobals } from "../../global/app.global.js";
import { userGlobals } from "../../global/user.global.js";
import { elementSelector } from "../../utils/elementSelector.js";

export const initShapesButton = async () => {
  console.log("Something");
  try {
    const shapesButton = await elementSelector<HTMLInputElement>("#shapes");
    if (!shapesButton) throw new Error("Element not found.");

    shapesButton.addEventListener("input", (e: Event) => {
      console.log(shapesButton.value);
      if (!appGlobals.appShapes.includes(shapesButton.value)) return;
      userGlobals.currentTool = ShapeTool.getTool(shapesButton.value as any);
    });
  } catch (err: any) {
    console.error(err);
  }
};
