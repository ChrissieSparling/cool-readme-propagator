// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown').default;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the name of your App?"
    },
    {
        type: "input",
        name: "description",
        message: "what does your App do?"
    },
    {
        type: "input",
        name: "author",
        message: "Who are you?"
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation deatails for your app??"
    },
    {
        type: "input",
        name: "usage",
        message: "enter the usage details for your app."
    },
    {
        type: "input",
        name: "contributing",
        message: "please list any one who contributed to the development of your app??"
    },
    {
        type: "list",
        name: "license",
        message: "if applicable please select a registered license?",
        choices: ["Mozilla", "MIT", "Apache", "ISC", "no License required"]
    },
    {
        type: "input",
        name: "tests",
        message: "please enter test instructions for any applicable tests associated with the app."
    },
    {
        type: "input",
        name: "github",
        message: "what is your github information?"
    },
    {
        type: "input",
        name: "email",
        message: "what is email addy?"
    },
    //{
      //  type: "input",
        //name: "questions",
        //message: "any additional questions please contact us."
   // },
];


// TODO: Create a function to initialize app
function init() {
    // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
    inquirer.prompt(questions).then(function(inquireResponse){
        fs.writeFileSync("README.md", generateMarkdown(inquireResponse))
    })
}

// Function call to initialize app
init();
