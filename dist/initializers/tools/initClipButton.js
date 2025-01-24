var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ClipTool } from "../../canvas/ClipTool.js";
import { userGlobals } from "../../global/user.global.js";
import { elementSelector } from "../../utils/elementSelector.js";
export const initClipButton = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Something");
    try {
        const clipButton = yield elementSelector("#clip");
        if (!clipButton)
            throw new Error("Element not found.");
        clipButton.addEventListener("click", (e) => {
            userGlobals.currentTool = ClipTool.getTool();
        });
    }
    catch (err) {
        console.error(err);
    }
});
