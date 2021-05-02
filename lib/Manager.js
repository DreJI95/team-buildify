const  Employee = require('../lib/Employee.js');

class Manager extends Employee {

    constructor(name = '', id = 0, email = '',officeNumber) {

        super(name,id,email);

        this.officeNumber = officeNumber;
    }


getOfficeNumber() {

    return this.officeNumber.toString();
}

getRole() {

    return (Manager.name.toString());
}

}

module.exports = Manager;