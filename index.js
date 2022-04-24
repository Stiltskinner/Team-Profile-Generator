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
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require("inquirer");

// Question to ask user if they want to make another employee after they create an employee
const anotherPrompt =       {
    type: "list",
    message: "Would you like to add another employee?",
    name: "addAnother",
    choices: ["Yes","No",],
  };

// Employee type question to ask user if they select yes and want to create a new employee
const empType = 
    {
        type: "list",
        message: "Would you like to add an engineer or an intern?",
        name: "empType",
        choices: ["Engineer","Intern"],
      };

// init calls promptManager to kick off the process of asking for user information

const init = () => {
    promptManager() 
}

// promptManager asks the questions needed to create a manager object
const promptManager = () => {
    inquirer
    .prompt(Manager.questions)
    .then((response) => {
        genManager(response);
    })  
}
// asks questions to generate an engineer object
const promptEngineer = () => {
    inquirer
    .prompt(Engineer.questions)
    .then((response) => {
        genEngineer(response);
    })  
}

// asks questions to generate an intern object
const promptIntern = () => {
    inquirer
    .prompt(Intern.questions)
    .then((response) => {
        genIntern(response);
    })  
}

// function to ask the user whether or not they want to make another employee after they have created one, asks employee type if yes, writes generated html to file if no
const continueQ = () => {
    inquirer
    .prompt(anotherPrompt)
    .then((response) => {
        switch (response.addAnother) {
            case "Yes":
                promptEmployeeType();
                break;
            default:
                writeToFile("./dist/team.html", pageTemplate.genHTML())
                break;
        }
    }) 
}
// Creates a new manager object from user data and calls genCard to create the html for that object. After this is done, prompts the user to make another employee or writetoFile if they are finished making employees
const genManager = (data) => {
    const { name, id, email, officeNum } = data
    const newManager = new Manager.Manager(name, id, email, officeNum);
    pageTemplate.genCard(newManager)
    continueQ();
}

// Same as above but for engineers
const genEngineer = (data) => {
    const { name, id, email, gitName} = data
    const newEngineer = new Engineer.Engineer(name, id, email, gitName);
    pageTemplate.genCard(newEngineer)
    continueQ();
}

// Same as above but for interns
const genIntern = (data) => {
    const { name, id, email, schoolName} = data
    const newIntern = new Intern.Intern(name, id, email, schoolName);
    pageTemplate.genCard(newIntern)
    continueQ();
}

// Function to ask user what type of employee to make if they choose to make a new one
const promptEmployeeType = () => {
    inquirer
    .prompt(empType)
        .then((response) => {
            switch (response.empType) {
                case "Engineer":
                    promptEngineer();
                    break;
                default:
                    promptIntern();
                    break;  
            }
    });
}

// Function to create html file from formatted data generated in page-template.js
const writeToFile = (fileName, data) => {
    let parsedData = `${data}`
    fs.writeFile(fileName, parsedData, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

// Calls init when app is loaded
init();