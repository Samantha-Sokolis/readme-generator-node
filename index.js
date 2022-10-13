// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Write a description of your project",
      },
      {
        type: "input",
        name: "installation",
        message: "Write your installation instructions",
      },
      {
        type: "input",
        name: "usage",
        message: "Write your usage information",
      },
      {
        type: "input",
        name: "contributing",
        message: "What are your contribution guidelines?",
      },
      {
        type: "input",
        name: "tests",
        message: "What are your Test Instructions?",
      },
      {
        type: "checkbox",
        name: "license",
        message: "Choose a license",
        choices: ["MIT", "license 2", "license 3", "license 4"],
      },
      {
        type: "input",
        name: "username",
        message: "Enter your GitHub username",
      },
      {
        type: "input",
        name: "questions",
        message: "Enter your email address",
      },
    ])
    .then((input) => {
      return input;
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Your README has been generated");
  });
}

// TODO: Create a function to initialize app
function init() {
  questions()
    .then((input) => {
      return generateMarkdown(input);
    })
    .then((markdown) => {
      writeToFile("./README.md", markdown);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();









