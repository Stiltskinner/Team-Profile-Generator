// I will need to setup inquirer prompts to gather information from the user about their team members
// I will need to set up classes and subclasses for employees to store user information
// I will need to link all js files together with require
// I will need to set up page-template.js to put all of the pieces together in the html
// index.js should use fs writefile to create the html from page-template.js
// The tests should check that all class properties and methods give the correct output

// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const pageTemplate = require("./src/page-template");

// Call init to kick off the process of asking for user information

const init = () => {
    inquirer
    .prompt(managerQuestions)
    .then((answers) => {
        console.log("manager responses", answers)
    });
}

// Function to create html file from formatted data
const writeToFile = () => {
    fs.writeFile(fileName, parsedData, (err) =>
    err ? console.error(err) : console.log('Success!'));
}