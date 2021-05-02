const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

class TeamBuilder {

    constructor(){
        this.manager;
        this.employees = [];
    }

    enterTeamManager(){
        inquirer
  .prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
  })
  // destructure name from the prompt object
  .then(({ name }) => {
    this.player = new Player(name);

    this.startNewBattle();
    // test the object creation
    console.log(this.currentEnemy, this.player);
  });
    }

    initializeTeamBuilder()
    {
        this.manager = this.enterTeamManager();
    };
}

module.exports = TeamBuilder;