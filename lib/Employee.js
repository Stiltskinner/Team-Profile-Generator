class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee";
    }
    
}

const John = new Employee("John Testman", 35, "John@me.com");
console.log(John)

module.exports = Employee;