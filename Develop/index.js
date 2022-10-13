// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];
const questions = require('questions');
const fs = require('fs');

    questions
    .prompt([
        {
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
        },
    ])
    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Readme file created!')
        );
    });

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

