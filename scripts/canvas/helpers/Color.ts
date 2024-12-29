export class Color {
  public color!: string;
  public constructor(public red: number, public green: number, public blue: number, public alpha: number = 1) {
    this.color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  setColorString() {
    this.color = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
  }

  public static colorFromHex(hexColor: string) {
    hexColor = hexColor.substring(1);

    let alpha = 1;
    const red = parseInt(hexColor.substring(0, 2), 16);
    const green = parseInt(hexColor.substring(2, 4), 16);
    const blue = parseInt(hexColor.substring(4, 6), 16);

    if (hexColor.length === 8) {
      alpha = parseInt(hexColor.substring(6, 8), 16) / 256;
    }

    const colorObject: Color = new Color(red, green, blue, alpha);

    return colorObject;
  }
}
