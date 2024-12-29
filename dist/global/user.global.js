import { DrawTool } from "../canvas/DrawTool.js";
import { Color } from "../canvas/helpers/Color.js";
export const userGlobals = {
    currentTool: DrawTool.getTool(),
    strokeWidth: 5,
    strokeColor: new Color(0, 0, 0, 1),
    fillColor: new Color(0, 0, 0, 1),
    getCurrentTool: function () {
        return this.currentTool;
    },
};
