const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlGen = require("./lib/htmlGenerator");

const teamArray = [];

function addManager() {
    inquirer.prompt([{
        type: 'input',
        message: "What is the manager's name?",
        name: "name",
    },
    {
        type: 'input',
        message: "What is the manager's id?",
        name: "id",
    },
    {
        type: 'input',
        message: "what is the manager's email address",
        name: "email",
    },
    {
        type: 'input',
        message: "what is the manager's office phone number?",
        name: "officeNumber",
    }
    ]).then(managerAnswers => {
        // console.log(managerAnswers);
    const manager = new Manager (managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);

    teamArray.push(manager); 
})
};

addManager();

function addEngineer() {
    inquirer.prompt([{
        type: 'input',
        message: "What is the engineer's name?",
        name: "name",
    },
    {
        type: 'input',
        message: "What is the engineer's id?",
        name: "id",
    },
    {
        type: 'input',
        message: "what is the engineer's email address",
        name: "email",
    },
    {
        type: 'input',
        message: "what is the engineer's gitHub username?",
        name: "github",
    }
    ]).then(engineerAnswers => {
    const engineer = new Engineer (engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);

    teamArray.push(engineer); 
});
};

addEngineer();

function addIntern() {
    inquirer.prompt([{
        type: 'input',
        message: "What is the intern's name?",
        name: "name",
    },
    {
        type: 'input',
        message: "What is the intern's id?",
        name: "id",
    },
    {
        type: 'input',
        message: "what is the intern's email address",
        name: "email",
    },
    {
        type: 'input',
        message: "what is the intern's current university?",
        name: "school",
    }
    ]).then(iternAnswers => {
    const intern = new Intern (iternAnswers.name, iternAnswers.id, iternAnswers.email, iternAnswers.school);

    teamArray.push(intern); 
});
};

addIntern();