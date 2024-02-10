const { Circle, Triangle, Square } = require('./shapes/index');

describe('Shape Rendering', () => {
  it('should render a circle with the correct color', () => {
    const shape = new Circle();
    shape.setColor('blue');
    const svg = shape.render();
    expect(svg).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
  });

  it('should render a triangle with the correct color', () => {
    const shape = new Triangle();
    shape.setColor('green');
    const svg = shape.render();
    expect(svg).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
  });

  it('should render a square with the correct color', () => {
    const shape = new Square();
    shape.setColor('red');
    const svg = shape.render();
    expect(svg).toEqual('<rect x="100" y="50" width="100" height="100" fill="red" />');
  });
});

describe('Create SVG', () => {
  it('should create an SVG file', () => {
    const text = 'ABC';
    const text_color = 'blue';
    const shape = 'circle';
    const shape_color = 'red';
});
