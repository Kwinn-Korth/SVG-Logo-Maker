const {Circle , Square , Triangle} = require('./shapes.js');

describe('Circle', () => {
    it('should create a circle', () => {
        const circle = new Circle(150, 100, 80, 'red');
        expect(circle.getCircle()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
});

describe('Square', () => {
    it('should create a square', () => {
        const square = new Square(50, 10, 200, 200, 'blue');
        expect(square.getSquare()).toEqual('<rect x="50" y="10" width="200" height="200" fill="blue" />');
    });
});

describe('Triangle', () => {
    it('should create a triangle', () => {
        const triangle = new Triangle('150,0 20,200 280,200', 'green');
        expect(triangle.getTriangle()).toEqual('<polygon points="150,0 20,200 280,200" fill="green" />');
    });
});

describe('Create SVG', () => {
    it('should create an SVG file', () => {
        const text = 'ABC';
        const text_color = 'blue';
        const shape = 'circle';
        const shape_color = 'red';
    });
});