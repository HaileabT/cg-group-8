var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { appGlobals } from "../global/app.global.js";
import { mouseGlobals } from "../global/mouse.global.js";
import { userGlobals } from "../global/user.global.js";
import { initUI } from "./initUI.js";
export const initApp = (canvasID) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const canvas = document.getElementById(canvasID);
        yield initUI();
        if (!canvas) {
            reject("Element not found. Canvas");
            return;
        }
        const scale = window.devicePixelRatio;
        canvas.width = canvas.getBoundingClientRect().width * scale;
        canvas.height = canvas.getBoundingClientRect().height * scale;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            reject("Failed to get drawing context.");
            return;
        }
        ctx.scale(scale, scale);
        canvas.style.width = canvas.getBoundingClientRect().width + "px";
        canvas.style.height = canvas.getBoundingClientRect().height + "px";
        appGlobals.canvas = canvas;
        canvas.addEventListener("mousedown", (e) => {
            mouseGlobals.isMouseHeldDown = true;
            mouseGlobals.mouseDownX = e.x;
            mouseGlobals.mouseDownY = e.y;
        });
        canvas.addEventListener("mouseleave", (e) => {
            if (userGlobals.currentTool.toolType === "rect") {
                userGlobals.currentTool.apply(ctx);
            }
        });
        canvas.addEventListener("mouseup", (e) => {
            mouseGlobals.isMouseHeldDown = false;
            mouseGlobals.mouseIsMoved = false;
            mouseGlobals.mouseUpX = e.x;
            mouseGlobals.mouseUpY = e.y;
            if (userGlobals.currentTool.toolType === "rect") {
                userGlobals.currentTool.apply(ctx);
            }
        });
        canvas.addEventListener("mousemove", (e) => {
            if (!mouseGlobals.isMouseHeldDown)
                return;
            mouseGlobals.currentMouseX = e.x;
            mouseGlobals.currentMouseY = e.y;
            if (userGlobals.currentTool.toolType === "rect")
                return;
            userGlobals.currentTool.apply(ctx);
        });
        resolve("Setup success.");
    }));
};
