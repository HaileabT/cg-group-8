import { Color } from "../canvas/helpers/Color.js";
import { DrawTool } from "../canvas/DrawTool.js";
import { RectangleTool, Tool } from "./tool.js";
import { Color } from "../canvas/helpers/Color.js";

export interface UserGlobal {
  currentTool: RectangleTool | Tool;
  strokeWidth: number;
  strokeColor: Color;
  fillColor: Color;
  getCurrentTool<T>(): T;
}
