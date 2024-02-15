const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should create an Engineer instance", () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
    expect(engineer instanceof Engineer).toBe(true);
  });

  it("should set GitHub account via constructor", () => {
    const github = "GitHubUser";
    const engineer = new Engineer("Foo", 1, "test@test.com", github);
    expect(engineer.github).toBe(github);
  });

  it("should return 'Engineer' when getRole() is called", () => {
    const engineer = new Engineer();
    expect(engineer.getRole()).toBe("Engineer");
  });

  it("should get GitHub username via getGithub()", () => {
    const github = "GitHubUser";
    const engineer = new Engineer("Foo", 1, "test@test.com", github);
    expect(engineer.getGithub()).toBe(github);
  });
});
