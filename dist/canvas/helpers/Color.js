export class Color {
    constructor(red, green, blue, alpha = 1) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
        this.color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }
    setColorString() {
        this.color = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }
    static colorFromHex(hexColor) {
        hexColor = hexColor.substring(1);
        let alpha = 1;
        const red = parseInt(hexColor.substring(0, 2), 16);
        const green = parseInt(hexColor.substring(2, 4), 16);
        const blue = parseInt(hexColor.substring(4, 6), 16);
        if (hexColor.length === 8) {
            alpha = parseInt(hexColor.substring(6, 8), 16) / 256;
        }
        const colorObject = new Color(red, green, blue, alpha);
        return colorObject;
    }
}
