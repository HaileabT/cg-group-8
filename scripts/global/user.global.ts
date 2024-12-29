import { DrawTool } from "../canvas/DrawTool.js";
import { Color } from "../canvas/helpers/Color.js";
import { UserGlobal } from "../types/user.global.js";

export const userGlobals: UserGlobal = {
  currentTool: DrawTool.getTool(),
  strokeWidth: 5,
  strokeColor: new Color(0, 0, 0, 1),
  fillColor: new Color(0, 0, 0, 1),
  getCurrentTool: function <T>(): T {
    return this.currentTool as T;
  },
};
