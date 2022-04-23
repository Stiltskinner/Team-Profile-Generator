// I will need to setup inquirer prompts to gather information from the user about their team members
// I will need to set up classes and subclasses for employees to store user information
// I will need to link all js files together with require
// I will need to set up page-template.js to put all of the pieces together in the html
// index.js should use fs writefile to create the html from page-template.js
// The tests should check that all class properties and methods give the correct output

// Packages needed for this application
const fs = require("fs");
const pageTemplate = require("./src/page-template");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const inquirer = require("inquirer");

// Call init to kick off the process of asking for user information

const init = () => {
    Manager.promptManager();
    .then(writeToFile)
}

// Function to create html file from formatted data
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, parsedData, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

init();