const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

const John = new Manager("John Testman", 35, "John@me.com", 352);
console.log(John)