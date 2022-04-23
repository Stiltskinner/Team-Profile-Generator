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
        message: "What school does the intern attend?",
        name: "schoolName",
      },      
];

class Intern extends Employee {
    constructor(name, id, email, schoolName) {
        super(name, id, email)
        this.schoolName = schoolName;
    }
    getRole() {
        return "Intern";
    }
}

// Asks for user input to create a new manager object

module.exports = {Engineer, questions};