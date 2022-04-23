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

// Question to ask user if they watn to make another employee after they create a manager
const anotherPrompt =       {
    type: "list",
    message: "Would you like to add another employee?",
    name: "addAnother",
    choices: ["Yes","No",],
  };

// Employee type question to create after manager has been created, to prompt user with inquirer
const empType = 
    {
        type: "list",
        message: "Would you like to add an engineer or an intern?",
        name: "empType",
        choices: ["Engineer","Intern"],
      };

// Call init to kick off the process of asking for user information

const init = () => {
    promptManager() 
}

const promptManager = () => {
    inquirer
    .prompt(Manager.questions)
    .then((response) => {
        genManager(response);
    })  
}

// Creates a new manager object from user data
const genManager = (data) => {
    const { name, id, email, officeNum } = data
    const newManager = new Manager.Manager(name, id, email, officeNum);
    pageTemplate.genCard(newManager)
    inquirer
    .prompt(anotherPrompt)
    .then((response) => {
        switch (response.addAnother) {
            case "Yes":
                promptEmployeeType();
                break;
            default:
                break;
        }
    })   
    }

    // Function to ask user what type of employee to make if they choose to make a new one
const promptEmployeeType = () => {
    inquirer
    .prompt(empType)
        .then((response) => {
            switch (response.empType) {
                case "Engineer":
                    console.log("Made it to Engineer prompt")
                    // () => Engineer.promptEngineer();
                    break;
                default:
                    console.log("Made it to Intern prompt")
                    // () => internal.promptIntern();
                    break;  
            }
    });
}

// Function to create html file from formatted data
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, parsedData, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

init();