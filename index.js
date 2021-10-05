const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlGen = require("./lib/htmlGenerator");

const teamArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
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
    ]).then(answers => {
    const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);

    teamArray.push(manager); 

    initPrompts();
})
};

const addEngineer = () => {
    return inquirer.prompt([{
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
    ]).then(answers => {
    const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);

    teamArray.push(engineer); 
});
};

const addIntern = () => {
    return inquirer.prompt([{
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
    ]).then(answers => {
    const intern = new Intern (answers.name, answers.id, answers.email, answers.school);

    teamArray.push(intern); 
});
};


const initPrompts = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'occupation',
            message: 'Please select one of the following...',
            choices: ['add an engineer', 'add an intern', 'finish']
        }
    ]).then(choice => {
        switch (choice.initPrompts) {
            case "add an engineer":
                addEngineer();
                break;

            case "add an intern":
                addIntern();
                break;
            default:
                finish();
        };
    });
};

const finish = () => {
     fs.writeFile(myPage(teamArray));
};

addManager();
