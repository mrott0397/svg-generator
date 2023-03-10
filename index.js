




const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const fs =require("fs")
// The name doesn't have to `maxlength-input` - it can be anything you like
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
const jest = require('jest');

class Menu {
    constructor() {

    }
}
inquirer
  .prompt ([
    {
      type: 'maxlength-input',
      name: 'text',
      message: 'What is your logo? (1 - 3 characters)',
      maxLength: 3
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like?',
      choices: ["circle", "rect", "polygon"]
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What color is your shape?'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What is your text color?'
    },
   
  ])
  .then((data) => {
    if(data.shape === "circle"){
      fs.writeFileSync("./dist/logo.svg", `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${data.shape} cx="150" cy="100" r="80" fill="${data.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill='${data.textColor}'>${data.text}</text>

</svg>
      `)
    }
    else if(data.shape === "rect"){
      fs.writeFileSync("./dist/logo.svg", `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${data.shape} x="75" y="25" width="150" height="150" fill="${data.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg>
      `)
    }
    else if (data.shape === 'polygon') {
      fs.writeFileSync('./dist/logo.svg',
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${data.shape} points="150,18 244,182 56, 182" fill="${data.shapeColor}"/>
      
        <text x="150" y="160" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
      
      </svg>`)
    }
    console.log('Generated logo.svg')
  });
  

