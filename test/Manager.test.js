const Employee = require('./../lib/Employee');
const Manager = require('./../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("It should create an object with 4 undefined properties name, id, and email, officeNum", () => {
            const newManager = new Manager.Manager();
            
            expect(newManager).toEqual({name: undefined, id: undefined, email: undefined, officeNum: undefined});
        });
    });
    describe("getName", () => {
        it("Should return the name provided to the constructor function as the first argument", () => {
            const newManager = new Manager.Manager("John Namesman", 123, "John@me.com");
            const str = "John Namesman";
            const result = newManager.getName();
            expect(str).toEqual(result);
        });
    });
});
    describe("getId", () => {
        it("Should return the id provided to the constructor function as the second argument", () => {
            const newManager = new Manager.Manager("John Namesman", 123, "John@me.com");
            const num = 123;
            const result = newManager.getId();
            expect(num).toEqual(result);
        });
    });
    describe("getEmail", () => {
        it("Should return the email provided to the constructor function as the third argument", () => {
            const newManager = new Manager.Manager("John Namesman", 123, "John@me.com");
            const str = "John@me.com";
            const result = newManager.getEmail();
            expect(str).toEqual(result);
        });
    });
    describe("getRole", () => {
        it("Should return the string: Manager", () => {
            const newManager = new Manager.Manager("John Namesman", 123, "John@me.com");
            const str = "Manager";
            const result = newManager.getRole();
            expect(str).toEqual(result);
        });
    });
    describe("getGitHub", () => {
        it("Should return the github username provided to the constructor function as the fourth argument", () => {
            const newManager = new Manager.Manager("John Namesman", 123, "John@me.com", "Stiltskinner");
            const str = "Stiltskinner";
            const result = newManager.getGitHub();
            expect(str).toEqual(result);
        });
    });