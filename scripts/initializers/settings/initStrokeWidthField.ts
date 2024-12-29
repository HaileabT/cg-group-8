import { appDefaults } from "../../global/defaults.global.js";
import { userGlobals } from "../../global/user.global.js";
import { elementSelector } from "../../utils/elementSelector.js";

export const initStrokeWidthField = async () => {
  console.log("Something");
  try {
    const strokeWidthField = await elementSelector<HTMLInputElement>(".stroke-width");
    if (!strokeWidthField) throw new Error("Element not found.");

    const storkeWidthFactor = parseInt(strokeWidthField.value) / 100;
    const newStrokeWidth = appDefaults.DEFAULT_STROKE_WIDTH * storkeWidthFactor;

    userGlobals.strokeWidth = newStrokeWidth;
    console.log(newStrokeWidth, storkeWidthFactor);

    strokeWidthField.addEventListener("change", (e: Event) => {
      console.log(strokeWidthField.value);
      if (isNaN(parseInt(strokeWidthField.value ?? ""))) return;

      const storkeWidthFactor = parseInt(strokeWidthField.value) / 100;
      const newStrokeWidth = appDefaults.DEFAULT_STROKE_WIDTH * storkeWidthFactor;

      userGlobals.strokeWidth = newStrokeWidth;
      console.log(newStrokeWidth, storkeWidthFactor);
    });
  } catch (err: any) {
    console.error(err);
  }
};
