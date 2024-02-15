const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should create a Manager instance", () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
    expect(manager instanceof Manager).toBe(true);
  });

  it("should set office number via constructor", () => {
    const officeNumber = 100;
    const manager = new Manager("Foo", 1, "test@test.com", officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
  });

  it("should return 'Manager' when getRole() is called", () => {
    const manager = new Manager();
    expect(manager.getRole()).toBe("Manager");
  });

  it("should get office number via getOfficeNumber()", () => {
    const officeNumber = 100;
    const manager = new Manager("Foo", 1, "test@test.com", officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
  });
});
