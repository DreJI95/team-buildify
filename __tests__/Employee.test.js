const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {

    const employee = new Employee('Andre',1,'andre.ji.moseley@gmail.com');

    expect(employee.name).toBe('Andre');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('calls the employee name prototype function', () => {

    const employee = new Employee('Andre',1,'andre.ji.moseley@gmail.com');

    expect(employee.getName()).toBe('Andre');
})

test('calls the employee id prototype function', () => {

    const employee = new Employee('Andre',1,'andre.ji.moseley@gmail.com');

    expect(employee.getId()).toEqual('1');
})

test('calls the employee email prototype function', () => {

    const employee = new Employee('Andre',1,'andre.ji.moseley@gmail.com');

    expect(employee.getEmail()).toEqual('andre.ji.moseley@gmail.com');
})

test('calls the employee role prototype function', () => {

    const employee = new Employee('Andre',1,'andre.ji.moseley@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
})