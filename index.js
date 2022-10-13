// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([{
            type: 'input',
            title: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            description: 'description',
            message: 'Write a description of your project',
        },
        {
            type: 'input',
            installation: 'installation',
            message: 'Write your installation instructions',
        },
        {
            type: 'input',
            usage: 'usage',
            message: 'Write your usage information',
        },
        {
            type: 'input',
            contributing: 'contribution-guidelines',
            message: 'What are your contribution guidelines?',
        },
        {
            type: 'input',
            tests: 'test-instructions',
            message: 'What are your Test Instructions?',
        },
        {
        type: 'checkbox',
        message: 'Choose a license',
        license: 'license',
        choices: ['MIT', 'license 2', 'license 3', 'license 4'],
        }])

    .then((data) => {
        return input;
    })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeMarkdown(fileName, data, err => {
        if(err) throw err;
        console.log('Your README has been generated')
    })
}

// TODO: Create a function to initialize app
function init() {}
    questions()
        .then(input => {
            return generateMarkdown(input);
        })
        .then(markdown => {
            console.log(err);
        })

// Function call to initialize app
init();

