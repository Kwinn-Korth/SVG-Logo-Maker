class Circle {
    constructor(cx, cy, r, fill) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.fill = fill;
    } 
    getSVG() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`;
    }
}


class Square {
    constructor(x, y, width, height, fill) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fill = fill;
    } getSVG() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fill}" />`;
    }
};

class Triangle {
    constructor(x1, y1, x2, y2, x3, y3, fill) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.fill = fill;
    } getSVG() {
        return `<polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="${this.fill}" />`;    }
};

module.exports = { Circle, Square, Triangle };