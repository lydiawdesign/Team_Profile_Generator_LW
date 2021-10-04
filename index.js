const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
        message: "what is the employee's email address",
        name: "email",
    },
    {
        type: 'input',
        message: "what is the manager's office number?",
        name: "phoneNumber",
    }
    ]).then(managerAnswers => {
        console.log(managerAnswers);
    const  { name, id, email, phoneNumber } = managerAnswers; 
    const manager = new Manager (name, id, email, phoneNumber);

    teamArray.push(manager); 
})
};

addManager()