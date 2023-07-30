// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a short description for your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions for your project:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please specify how to use your project:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['ISC', 'MIT', 'GNU GPLv3', 'Apache 2.0', 'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Explain how others can contribute to your project:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Explain any tests you have for your project:',
      },   
      {
        type: 'input',
        name: 'questions',
        message: 'Do you have any questions?',
      },    
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub URL:'
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error('Error writing README.md file:', err);
        } else {
          console.log('README.md file generated successfully!');
        }
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions) 
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error prompting user:', error);
    });
}

// Function call to initialize app
init();
