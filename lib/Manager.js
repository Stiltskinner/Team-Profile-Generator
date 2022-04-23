const Employee = require('./Employee');


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

module.exports = {Manager, questions};