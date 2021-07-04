const inquirer = require('inquirer');
const {writeHtmlFile, copyCssFile} = require('../util/generate-site');
const {generateHtmlDoc} = require('../util/page-template');

const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');

class TeamBuilder {

    constructor(){
        this.employees = [];
    }

    enterTeamMemberResponses(){

        const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the team member\'s name? (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;}
                else{
                    console.log('Please enter the team member\'s name!');
                    return false;}
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the team member\'s employeeId? (Required)',
            validate: idInput => {
                if (idInput){
                    return true;}
                else{
                    console.log('Please enter the team member\'s employee Id!');
                    return false;}
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team member\'s email address? (Required)',
            validate: emailInput => {
                if (emailInput){
                    return true;}
                else{
                    console.log('Please enter the team member\'s email address!');
                    return false;}
            }
        },
        ];

        return questions;
    }

    enterManagerResponses(){
        const questions = this.enterTeamMemberResponses();
        
        questions.push(
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number? (Required)',
            validate: officeNumInput => {
                if (officeNumInput){
                    return true;}
                else{
                    console.log('Please enter the team member\'s office number!');
                    return false;}
            }
        },
        {
            type: 'list',
            name: 'newEmployee',
            message: 'Would you like to add another employee?',
            choices: ['Engineer', 'Intern', 'No']
        }
        );

        return questions;
    }

    enterEngineerResponses(){

        const questions = this.enterTeamMemberResponses();
        
        questions.push(
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the engineer\'s GitHub profile? (Required)',
            validate: gitHubInput => {
                if (gitHubInput){
                    return true;}
                else{
                    console.log('Please enter the team member\'s GitHub profile!');
                    return false;}
            }
        },
        {
            type: 'list',
            name: 'newEmployee',
            message: 'Would you like to add another employee?',
            choices: ['Engineer', 'Intern', 'No']
        });

        return questions;
    }

    enterInternResponses(){

        const questions = this.enterTeamMemberResponses();
        
        questions.push(
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school? (Required)',
            validate: gitHubInput => {
                if (gitHubInput){
                    return true;}
                else{
                    console.log('Please enter the intern\'s school!');
                    return false;}
            }
        },
        {
            type: 'list',
            name: 'newEmployee',
            message: 'Would you like to add another employee?',
            choices: ['Engineer', 'Intern', 'No']
        });

        return questions;
    }

    /*Builds the HTML page */
    employeeBuilder(employeeList){
        writeHtmlFile(generateHtmlDoc(employeeList));
        copyCssFile();
    }

    createNewEmployee(employeeRole){

        if (employeeRole === 'Manager')
        {
            inquirer.prompt(this.enterManagerResponses()).then(responses => {
                responses.role = 'Manager';

                let employeeObject = new Manager();
                employeeObject.name = responses.name;
                employeeObject.email = responses.email;
                employeeObject.officeNumber = responses.officeNumber;
                employeeObject.id = responses.employeeId;

                this.employees.push(employeeObject);
                this.createNewEmployee(responses.newEmployee);
            })
        }

        else if (employeeRole === 'Engineer')
        {
            inquirer.prompt(this.enterEngineerResponses()).then(responses => {
                responses.role = 'Engineer';
                
                let employeeObject = new Engineer();
                employeeObject.name = responses.name;
                employeeObject.email = responses.email;
                employeeObject.gitHub = responses.gitHub;
                employeeObject.id = responses.employeeId;

                this.employees.push(employeeObject);
                this.createNewEmployee(responses.newEmployee);
            })
        }

        else if (employeeRole === 'Intern')
        {
            inquirer.prompt(this.enterInternResponses()).then(responses => {
                responses.role = 'Intern';
                
                let employeeObject = new Intern();
                employeeObject.name = responses.name;
                employeeObject.email = responses.email;
                employeeObject.school = responses.school;
                employeeObject.id = responses.employeeId;

                this.employees.push(employeeObject);
                this.createNewEmployee(responses.newEmployee);
            })
        }

        else
        {
            console.log(this.employees);
            this.employeeBuilder(this.employees);
        }
    }

    initializeTeamBuilder()
    {  
        this.createNewEmployee('Manager');
    }
}

module.exports = TeamBuilder;