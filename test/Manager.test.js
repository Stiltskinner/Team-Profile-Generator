const Employee = require('./../lib/Employee');
const Manager = require('./../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("It should create an object from the constructor function Manager", () => {
            const newManager = new Manager.Manager();
            expect(typeof newManager).toBe("object")
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