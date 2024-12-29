import { Color } from "../../canvas/helpers/Color.js";
import { userGlobals } from "../../global/user.global.js";
import { elementSelector } from "../../utils/elementSelector.js";

export const initFillColorField = async () => {
  console.log("Something");
  try {
    const fillColorField = await elementSelector<HTMLInputElement>(".fill-color");
    if (!fillColorField) throw new Error("Element not found.");

    const indicator = await elementSelector<HTMLSpanElement>(".fill-color-indicator");
    if (!indicator) throw new Error("Element not found.");
    indicator.style.backgroundColor = fillColorField.value;

    const colorObject: Color = Color.colorFromHex(fillColorField.value);
    userGlobals.fillColor = colorObject;

    fillColorField.addEventListener("change", async (e: Event) => {
      indicator.style.backgroundColor = fillColorField.value;
      const colorObject: Color = Color.colorFromHex(fillColorField.value);
      userGlobals.fillColor = colorObject;
    });
  } catch (err: any) {
    console.error(err);
  }
};
