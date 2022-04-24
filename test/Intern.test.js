const Employee = require('./../lib/Employee');
const Intern = require('./../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("It should create an object with 3 undefined properties name, id, and email", () => {
            const newIntern = new Intern.Intern();
            
            expect(newIntern).toEqual({name: undefined, id: undefined, email: undefined});
        });
    });
    describe("getName", () => {
        it("Should return the name provided to the constructor function as the first argument", () => {
            const newIntern = new Intern.Intern("John Namesman", 123, "John@me.com");
            const str = "John Namesman";
            const result = newIntern.getName();
            expect(str).toEqual(result);
        });
    });
});
    describe("getGitHub", () => {
        it("Should return the school name provided to the constructor function as the fourth argument", () => {
            const newIntern = new Intern.Intern("John Namesman", 123, "John@me.com", "UT Austin");
            const str = "UT Austin";
            const result = newIntern.getSchool();
            expect(str).toEqual(result);
        });
    });