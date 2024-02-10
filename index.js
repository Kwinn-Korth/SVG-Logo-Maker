'use strict';

const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes');

async function create_svg(text, text_color, shape, shape_color) {
  let shapeInstance;

  switch (shape) {
    case 'circle':
      shapeInstance = new Circle();
      break;
    case 'triangle':
      shapeInstance = new Triangle();
      break;
    case 'square':
      shapeInstance = new Square();
      break;
    default:
      console.log('Invalid shape choice. Exiting.');
      process.exit(1);
  }

  if (shapeInstance) {
    shapeInstance.setColor(shape_color);

    // Construct SVG content with text and shape
    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="100" fill="${text_color}" text-anchor="middle" alignment-baseline="middle">${text}</text>
        ${shapeInstance.render()}
      </svg>
    `;

    // Write SVG content to file
    fs.writeFileSync('logo.svg', svgContent);

    console.log('Logo saved as logo.svg');
  }
}

async function main() {
  console.log('Welcome to the Logo Generator');

  const userResponse = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (value) => {
        if (value.length > 3) {
          return 'Please enter up to three characters.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'text_color',
      message: 'Enter the text color (color keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shape_color',
      message: 'Enter the shape color (color keyword or hexadecimal):',
    },
  ]);

  const { text, text_color, shape, shape_color } = userResponse;

  create_svg(text, text_color, shape, shape_color);
}

main(); // Call the main function to start the program
