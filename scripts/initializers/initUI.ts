import { initControlsSection } from "./initControlsSection.js";
import { initDrawButton } from "./tools/initDrawButton.js";
import { initEraseButton } from "./tools/initEraseButton.js";
import { initFillColorField } from "./settings/initFillColorField.js";
import { initStrokeColorField } from "./settings/initStrokeColorField.js";
import { initStrokeWidthField } from "./settings/initStrokeWidthField.js";
import { initRectEraseButton } from "./tools/initRectEraseButton.js";
import { initShapesButton } from "./tools/initShapesButton.js";
import { initClipButton } from "./tools/initClipButton.js";

export const initUI = async () => {
  await initDrawButton();
  await initEraseButton();
  await initRectEraseButton();
  await initClipButton();
  await initShapesButton();
  await initControlsSection();
  await initStrokeWidthField();
  await initStrokeColorField();
  await initFillColorField();
};
