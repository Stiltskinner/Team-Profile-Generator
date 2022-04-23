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
        message: "What is the engineer's GitHub username?",
        name: "gitName",
      },      
];

class Engineer extends Employee {
    constructor(name, id, email, gitName) {
        super(name, id, email)
        this.gitName = gitName;
    }
    getRole() {
        return "Engineer";
    }
}

// Asks for user input to create a new manager object

module.exports = {Engineer, questions};