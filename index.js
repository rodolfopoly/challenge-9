// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation instructions of your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information of your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What is the contribution guidelines of your project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please check the license:',
        choices: ['GNU', 'X11', 'BSD'],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test this project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err=>
    err ? console.log(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(userInfo => {
        writeToFile("README.md", generateMarkdown(userInfo));
    } )
}

// Function call to initialize app
init();
