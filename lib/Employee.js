class Employee {

        constructor(name = '', id = 0, email = '') {
            this.name = name;
            this.id = id;
            this.email = email;
        }

    getName() {
        return this.name.toString();
    }

    getId() {
        return this.id.toString();
    }

    getEmail() {
        return this.email.toString();
    }

    getRole() {

        return (Employee.name.toString());
    }

}


module.exports = Employee;