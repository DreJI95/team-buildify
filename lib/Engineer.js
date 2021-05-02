const  Employee = require('../lib/Employee.js');

class Engineer extends Employee {

    constructor(name = '', id = 0, email = '', gitHub = '') {

        super(name,id,email);

        this.gitHub = gitHub;
    }


getGitHub() {

    return this.gitHub.toString();
}

getRole() {

    return (Engineer.name.toString());
}

}

module.exports = Engineer;