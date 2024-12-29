export interface Tool {
  toolType: "rect" | "free";
  apply(ctx: CanvasRenderingContext2D): void;
}

export interface RectangleTool extends Tool {
  drawBoundingBox(ctx: CanvasRenderingContext2D): void;
}
