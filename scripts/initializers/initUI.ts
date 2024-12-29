import { initControlsSection } from "./initControlsSection.js";
import { initDrawButton } from "./tools/initDrawButton.js";
import { initEraseButton } from "./tools/initEraseButton.js";
import { initFillColorField } from "./settings/initFillColorField.js";
import { initStrokeColorField } from "./settings/initStrokeColorField.js";
import { initStrokeWidthField } from "./settings/initStrokeWidthField.js";
import { initClipButton } from "./tools/initClipButton.js";
import { initShapesButton } from "./tools/initShapesButton.js";

export const initUI = async () => {
  await initDrawButton();
  await initEraseButton();
  await initClipButton();
  await initShapesButton();
  await initControlsSection();
  await initStrokeWidthField();
  await initStrokeColorField();
  await initFillColorField();
};
