var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initControlsSection } from "./initControlsSection.js";
import { initDrawButton } from "./tools/initDrawButton.js";
import { initEraseButton } from "./tools/initEraseButton.js";
import { initFillColorField } from "./settings/initFillColorField.js";
import { initStrokeColorField } from "./settings/initStrokeColorField.js";
import { initStrokeWidthField } from "./settings/initStrokeWidthField.js";
import { initRectEraseButton } from "./tools/initRectEraseButton.js";
import { initShapesButton } from "./tools/initShapesButton.js";
import { initClipButton } from "./tools/initClipButton.js";
export const initUI = () => __awaiter(void 0, void 0, void 0, function* () {
    yield initDrawButton();
    yield initEraseButton();
    yield initRectEraseButton();
    yield initClipButton();
    yield initShapesButton();
    yield initControlsSection();
    yield initStrokeWidthField();
    yield initStrokeColorField();
    yield initFillColorField();
});
