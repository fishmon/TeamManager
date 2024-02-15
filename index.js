const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Function to create the output directory if it doesn't exist
const createOutputDirectory = () => {
    console.log('Creating output directory:', OUTPUT_DIR);
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
      console.log('Output directory created successfully!');
    } else {
      console.log('Output directory already exists.');
    }
  };
  

// Function to prompt for manager's information
const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the team manager's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the team manager's employee ID:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the team manager's email:",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Enter the team manager's office number:",
    },
  ]);
};

// Function to prompt for engineer's information
const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the engineer's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the engineer's employee ID:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the engineer's email:",
    },
    {
      type: 'input',
      name: 'github',
      message: "Enter the engineer's GitHub username:",
    },
  ]);
};

// Function to prompt for intern's information
const promptIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the intern's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the intern's employee ID:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the intern's email:",
    },
    {
      type: 'input',
      name: 'school',
      message: "Enter the intern's school:",
    },
  ]);
};

// Function to prompt for adding another team member or finishing
const promptTeamMember = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'memberType',
      message: 'Would you like to add an engineer, add an intern, or finish building the team?',
      choices: ['Engineer', 'Intern', 'Finish building the team'],
    },
  ]);
};

// Function to initialize the application
const init = async () => {
  try {
    const team = [];

    // Prompt for manager's information
    const managerData = await promptManager();
    // Create manager object and push to team array
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
    team.push(manager);

    // Variable to control adding more team members
    let addTeamMember = true;
    while (addTeamMember) {
      // Prompt user to add an engineer, add an intern, or finish building the team
      const { memberType } = await promptTeamMember();

      if (memberType === 'Engineer') {
        // Prompt for engineer's information
        const engineerData = await promptEngineer();
        // Create engineer object and push to team array
        const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
        team.push(engineer);
      } else if (memberType === 'Intern') {
        // Prompt for intern's information
        const internData = await promptIntern();
        // Create intern object and push to team array
        const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
        team.push(intern);
      } else {
        // Finish building the team
        addTeamMember = false;
      }
    }

    // Generate HTML using the team array
    const html = render(team);

    // Write HTML to team.html file
    fs.writeFileSync(outputPath, html);

    console.log('Team HTML file generated successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call init function to start the application
init();
