const inquirer = require("inquirer");
const Employee = require('./Employee');
const pageTemplate = require('./../src/page-template');
const index = require('./../index');

// Questions to prompt user with using inquirer
const questions = [
    {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the employee's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the employee's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the employee's office number?",
        name: "officeNum",
      },
      {
        type: "list",
        message: "Would you like to add another employee?",
        name: "addAnother",
        choices: ["Yes","No",],
      },
      
];

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;
    }
    getRole() {
        return "Manager";
    }
}

// Asks for user input to create a new manager object
const promptManager = () => {
    inquirer
    .prompt(questions)
    .then((response) => {
        genManager(response);
        switch (response.addAnother) {
            case "Yes":
                () => index.promptEmployeeType;
                break;
            default:
                break;  
        }
    });
}

// Creates a new manager object from user data
const genManager = (data) => {
    const { name, id, email, officeNum } = data
    const newManager = new Manager(name, id, email, officeNum);
    let formattedManager = formatManager(newManager);
    pageTemplate.genCard(formattedManager);
}

const formatManager = (element) => {
    let managerEl = element;
    const { name, id, email, officeNum} = managerEl;
    let role = managerEl.getRole();
    return `<div class="col pb-3 pr-3 mb-3 bg-body rounded">
    <div class="card shadow" style="width: 18rem;">
        <div class="card-body bg-primary">
          <h5 class="card-title text-light">${name}/h5>
          <p class="card-text text-light">${role}</p>
        </div>
        <div class=" bg-lgray py-3 px-1" style="width: 18rem;">
            <ul class="list-group list-group-flush border bd-list mx-auto" style="width: 15rem;">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Office Number: ${officeNum}</li>
            </ul>
        </div>
      </div>
</div>`
}
promptManager();

module.exports = Manager;