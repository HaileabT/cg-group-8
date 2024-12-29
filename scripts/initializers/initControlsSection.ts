import { elementSelector } from "../utils/elementSelector.js";

export const initControlsSection = async () => {
  try {
    const controlsSection = await elementSelector<HTMLSelectElement>(".controls-section");
    if (!controlsSection) throw new Error("Element not found.");
  } catch (err: any) {
    console.log(err);
  }
};
