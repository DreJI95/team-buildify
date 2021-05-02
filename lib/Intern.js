const  Employee = require('../lib/Employee.js');

class Intern extends Employee {

    constructor(name = '', id = 0, email = '', school = '') {

        super(name,id,email);

        this.school = school;
    }


getSchool() {

    return this.school.toString();
}

getRole() {

    return (Intern.name.toString());
}

}

module.exports = Intern;