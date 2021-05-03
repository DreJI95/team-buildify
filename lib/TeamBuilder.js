const inquirer = require('inquirer');
const Employee = require('./Employee.js');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');

class TeamBuilder {

    constructor(){
        this.employees = [];
        this.addEmployee = true;
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

    createNewEmployee(obj){

        var questions;

        if (obj === 'Manager')
        {
            questions = this.enterManagerResponses();
        }

        else if (obj === 'Engineer')
        {
            questions = this.enterEngineerResponses();
        }

        else if (obj === 'Intern')
        {
            questions = this.enterInternResponses();
        }

        inquirer.prompt(questions).then(responses => {
            console.log(responses);
            const {newEmployee,...rest} = responses;
            return newEmployee;
        });
    }

    initializeTeamBuilder()
    {        
        
       const newEmployee = this.createNewEmployee('Manager');
       console.log(newEmployee);

            if(newEmployee === 'Engineer' && this.addEmployee)
            {
                this.createNewEmployee('Engineer');
            }
            else if(newEmployee === 'Intern' && this.addEmployee)
            {
                this.createNewEmployee('Intern');
            }
            else
            {
                this.addEmployee = false;
            }        

        // this.employee.forEach(element => {
        //     element = this.enterTeamResponses();
        // });
    }
}

module.exports = TeamBuilder;