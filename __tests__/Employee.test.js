const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should create an Employee instance", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
    expect(employee instanceof Employee).toBe(true);
  });

  it("should set name via constructor", () => {
    const name = "Alice";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

  it("should set id via constructor", () => {
    const id = 100;
    const employee = new Employee("Foo", id);
    expect(employee.id).toBe(id);
  });

  it("should set email via constructor", () => {
    const email = "test@test.com";
    const employee = new Employee("Foo", 1, email);
    expect(employee.email).toBe(email);
  });

  it("should get name via getName()", () => {
    const name = "Alice";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
  });

  it("should get id via getId()", () => {
    const id = 100;
    const employee = new Employee("Foo", id);
    expect(employee.getId()).toBe(id);
  });

  it("should get email via getEmail()", () => {
    const email = "test@test.com";
    const employee = new Employee("Foo", 1, email);
    expect(employee.getEmail()).toBe(email);
  });

  it("should return 'Employee' when getRole() is called", () => {
    const employee = new Employee();
    expect(employee.getRole()).toBe("Employee");
  });
});
