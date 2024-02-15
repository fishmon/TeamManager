# Team Builder Command-Line Application

[![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)](https://www.javascript.com/)
[![Node.js](https://img.shields.io/badge/Dependency-Node.js-brightgreen)](https://nodejs.org/)
[![Inquirer](https://img.shields.io/badge/Dependency-Inquirer-blue)](https://www.npmjs.com/package/inquirer)
[![HTML](https://img.shields.io/badge/Language-HTML-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/Language-CSS-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Testing](https://img.shields.io/badge/Testing-Jest-red)](https://jestjs.io/)


This command-line application allows users to build a development team by entering information about team members. The application utilizes classes to represent different types of team members, including the team manager, engineers, and interns. It also incorporates inquirer for user input and generates an HTML file with information about the team members.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Classes and Structure](#classes-and-structure)
- [Validation](#validation)
- [Contributing](#contributing)
- [Repository](#repository)
- [Video Demo](#video-demo)
- [Contact Me](#contact-me)
- [License](#license)

## Getting Started

To use the Team Builder application, follow these steps:

1. Clone the repository:
`git clone git@github.com:fishmon/TeamManagerGenerator.git `


2. Navigate to the project directory:
`cd <project-directory>`


3. Install dependencies:
`npm install`


4. Start the application:
`node index`

5. Testing :
`npm run test`


## Usage

1. Upon starting the application, you will be prompted to enter information about the team manager, including their name, employee ID, email address, and office number.

2. After entering the manager's information, you will be presented with a menu offering the following options:
- Add an engineer
- Add an intern
- Finish building the team

3. If you choose to add an engineer, you will be prompted to enter the engineer's name, ID, email, and GitHub username.

4. If you choose to add an intern, you will be prompted to enter the intern's name, ID, email, and school.

5. You can continue adding engineers and interns as needed. Once you finish building the team, select the option to finish, and the application will exit.

6. The application will generate an HTML file named `team.html` in the `output` folder. This file will contain information about all the team members you entered.

## Classes and Structure

The application is structured with classes for each type of team member:
- `Employee`: Represents a generic employee with properties such as name, ID, and email.
- `Manager`: Extends `Employee` and includes an additional property for office number.
- `Engineer`: Extends `Employee` and includes a property for GitHub username.
- `Intern`: Extends `Employee` and includes a property for school.

## Validation

The application incorporates validation to ensure that user input is in the proper format. This helps prevent errors and ensures that the generated HTML is accurate.

## Contributing

Contributions to this project are welcome! If you have suggestions for improvements or find any issues, please submit them via GitHub issues or fork the repository and submit a pull request.

## Repository

Check out the [repository](https://github.com/fishmon/TeamManagerGenerator) for this project to view the source code and documentation.

## Video Demo

Watch a vide of the Team Builder application [here](https://drive.google.com/file/d/1Dsh4tLJHCVa4WypPb6u7lhgpyNUPy8Bo/view?usp=sharing), or the gif file version bellow.

![Gif](./dist/images/demo.gif)


## Contact Me

For any inquiries or feedback, feel free to contact me at [serbanescuclaudiu93@gmail.com](mailto:serbanescuclaudiu93@gmail.com).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
