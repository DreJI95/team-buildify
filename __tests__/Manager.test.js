const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {

    const manager = new Manager('Andre',1,'andre.ji.moseley@gmail.com',2);

    expect(manager.name).toBe('Andre');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('calls the manager name prototype function', () => {

    const manager = new Manager('Andre',1,'andre.ji.moseley@gmail.com',2);

    expect(manager.getName()).toBe('Andre');
})

test('calls the manager id prototype function', () => {

    const manager = new Manager('Andre',1,'andre.ji.moseley@gmail.com',2);

    expect(manager.getId()).toEqual('1');
})

test('calls the manager email prototype function', () => {

    const manager = new Manager('Andre',1,'andre.ji.moseley@gmail.com',2);

    expect(manager.getEmail()).toEqual('andre.ji.moseley@gmail.com');
})

test('calls the manager office number prototype function', () => {

    const manager = new Manager('Andre',1,'andre.ji.moseley@gmail.com',2);

    expect(manager.getOfficeNumber()).toEqual('2');
})

test('calls the manager role prototype function', () => {

    const manager = new Manager('Andre',1,'andre.ji.moseley@gmail.com',2);

    expect(manager.getRole()).toEqual('Manager');
})