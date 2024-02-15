const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should create an Intern instance", () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
    expect(intern instanceof Intern).toBe(true);
  });

  it("should set school via constructor", () => {
    const school = "UCLA";
    const intern = new Intern("Foo", 1, "test@test.com", school);
    expect(intern.school).toBe(school);
  });

  it("should return 'Intern' when getRole() is called", () => {
    const intern = new Intern();
    expect(intern.getRole()).toBe("Intern");
  });

  it("should get school via getSchool()", () => {
    const school = "UCLA";
    const intern = new Intern("Foo", 1, "test@test.com", school);
    expect(intern.getSchool()).toBe(school);
  });
});
