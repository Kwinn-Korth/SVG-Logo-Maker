const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes/shapes.js');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter 3 characters or less for your logo:',
            validate: (input) => {
                if(input.length > 3) {
                    return 'Only use 3 characters or less.'
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Input a color for the text:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for your logo:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Input a color for the shape:'
        }
    ])
    .then((data) => {
    const filename = path.join(examples, `${data.text}.svg`);

    const logoData = {
        text: data.text,
        textColor: data.textColor,
        shape: data.shape,
        shapeColor: data.shapeColor
    }

    let shapeSvg = ``;

    if (logoData.shape == 'circle') {
        const circle = new shapes.Circle(150, 100, 80, logoData.shapeColor);
        shapeSvg = circle.getSvg();
    } else if (logoData.shape == 'triangle') {
        const triangle = new shapes.Triangle('150,0 20,200 280,200', logoData.shapeColor);
        shapeSvg = triangle.getSvg();
    } else if (logoData.shape == 'square') {
        const square = new shapes.Square(50, 10, 200, 200, logoData.shapeColor);
        shapeSvg = square.getSvg();
    }

    const logoCode = `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
     ${shapeSvg}
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoData.textColor}">${logoData.text}</text>
    </svg>`;
    
    fs.writeFile(filename, logoCode, (err) =>
    err ? console.log(err) : console.log('Generated Logo!'));
});