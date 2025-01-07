import { appGlobals } from "../global/app.global.js";
import { mouseGlobals } from "../global/mouse.global.js";
import { userGlobals } from "../global/user.global.js";
import { RectangleTool } from "../types/tool.js";
import { elementSelector } from "../utils/elementSelector.js";
import { initUI } from "./initUI.js";
import { RectToolIndicator } from "./ui_aids/RectangleToolIndicator.js";

export const initApp = (canvasID: string) => {
  return new Promise(async (resolve, reject) => {
    const canvas: HTMLCanvasElement = document.getElementById(canvasID) as HTMLCanvasElement;
    await initUI();
    const rectIndicator = await RectToolIndicator.getIndicator();

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

    canvas.addEventListener("mousedown", (e: MouseEvent) => {
      mouseGlobals.isMouseHeldDown = true;
      mouseGlobals.mouseDownX = e.x;
      mouseGlobals.mouseDownY = e.y;
      mouseGlobals.mouseUpX = e.x;
      mouseGlobals.mouseUpY = e.y;

      if (userGlobals.currentTool.toolType === "rect") {
        rectIndicator.moveIndicatorTo(e.offsetX, e.offsetY);
      }
    });

    canvas.addEventListener("mouseleave", (e: MouseEvent) => {
      if (userGlobals.currentTool.toolType === "rect") {
        userGlobals.currentTool.apply(ctx);
      }
      rectIndicator.hideIndicator();
      rectIndicator.resizeIndicator(0, 0, 0, 0, ctx);
    });

    canvas.addEventListener("mouseup", (e: MouseEvent) => {
      mouseGlobals.isMouseHeldDown = false;
      mouseGlobals.mouseIsMoved = false;
      mouseGlobals.mouseUpX = e.x;
      mouseGlobals.mouseUpY = e.y;

      if (userGlobals.currentTool.toolType === "rect") {
        userGlobals.currentTool.apply(ctx);
      }

      rectIndicator.hideIndicator();
      rectIndicator.resizeIndicator(0, 0, 0, 0, ctx);
    });

    canvas.addEventListener("mousemove", (e: MouseEvent) => {
      if (!mouseGlobals.isMouseHeldDown) return;

      mouseGlobals.currentMouseX = e.x;
      mouseGlobals.currentMouseY = e.y;

      if (userGlobals.currentTool.toolType === "rect") {
        rectIndicator.resizeIndicator(e.clientX, e.clientY, e.movementX, e.movementY, ctx);
        if (rectIndicator.isIndicatorVisible()) return;
        console.log("Not visible");
        rectIndicator.showIndicator(e.clientX, e.clientY);
        return;
      }

      userGlobals.currentTool.apply(ctx);
    });

    resolve("Setup success.");
  });
};
