import { Color } from "../../canvas/helpers/Color.js";
import { userGlobals } from "../../global/user.global.js";
import { elementSelector } from "../../utils/elementSelector.js";

export const initStrokeColorField = async () => {
  console.log("Something");
  try {
    const strokeColorField = await elementSelector<HTMLInputElement>(".stroke-color");
    if (!strokeColorField) throw new Error("Element not found.");

    const indicator = await elementSelector<HTMLSpanElement>(".color-indicator");
    if (!indicator) throw new Error("Element not found.");
    indicator.style.backgroundColor = strokeColorField.value;

    const colorObject = Color.colorFromHex(strokeColorField.value);
    userGlobals.strokeColor = colorObject;

    strokeColorField.addEventListener("change", async (e: Event) => {
      indicator.style.backgroundColor = strokeColorField.value;
      const colorObject = Color.colorFromHex(strokeColorField.value);
      userGlobals.strokeColor = colorObject;
    });
  } catch (err: any) {
    console.error(err);
  }
};
