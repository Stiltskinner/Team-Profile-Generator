const Employee = require('./../lib/Employee');
const Engineer = require('./../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("It should create an object from the constructor function Engineer", () => {
            const newEngineer = new Engineer.Engineer();
            expect(typeof newEngineer).toBe("object")
        });
    });
    describe("getName", () => {
        it("Should return the name provided to the constructor function as the first argument", () => {
            const newEngineer = new Engineer.Engineer("John Namesman", 123, "John@me.com");
            const str = "John Namesman";
            const result = newEngineer.getName();
            expect(str).toEqual(result);
        });
    });
});
    describe("getId", () => {
        it("Should return the id provided to the constructor function as the second argument", () => {
            const newEngineer = new Engineer.Engineer("John Namesman", 123, "John@me.com");
            const num = 123;
            const result = newEngineer.getId();
            expect(num).toEqual(result);
        });
    });
    describe("getEmail", () => {
        it("Should return the email provided to the constructor function as the third argument", () => {
            const newEngineer = new Engineer.Engineer("John Namesman", 123, "John@me.com");
            const str = "John@me.com";
            const result = newEngineer.getEmail();
            expect(str).toEqual(result);
        });
    });
    describe("getRole", () => {
        it("Should return the string: Engineer", () => {
            const newEngineer = new Engineer.Engineer("John Namesman", 123, "John@me.com");
            const str = "Engineer";
            const result = newEngineer.getRole();
            expect(str).toEqual(result);
        });
    });
    describe("getGitHub", () => {
        it("Should return the github username provided to the constructor function as the fourth argument", () => {
            const newEngineer = new Engineer.Engineer("John Namesman", 123, "John@me.com", "Stiltskinner");
            const str = "Stiltskinner";
            const result = newEngineer.getGitHub();
            expect(str).toEqual(result);
        });
    });