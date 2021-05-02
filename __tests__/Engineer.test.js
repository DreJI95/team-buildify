const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {

    const engineer = new Engineer('Andre',1,'andre.ji.moseley@gmail.com','DreJI95');

    expect(engineer.name).toBe('Andre');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
})

test('calls the engineer name prototype function', () => {

    const engineer = new Engineer('Andre',1,'andre.ji.moseley@gmail.com','DreJI95');

    expect(engineer.getName()).toBe('Andre');
})

test('calls the engineer id prototype function', () => {

    const engineer = new Engineer('Andre',1,'andre.ji.moseley@gmail.com','DreJI95');

    expect(engineer.getId()).toEqual('1');
})

test('calls the engineer email prototype function', () => {

    const engineer = new Engineer('Andre',1,'andre.ji.moseley@gmail.com','DreJI95');

    expect(engineer.getEmail()).toEqual('andre.ji.moseley@gmail.com');
})

test('calls the engineer gitHub username prototype function', () => {

    const engineer = new Engineer('Andre',1,'andre.ji.moseley@gmail.com','DreJI95');

    expect(engineer.getGitHub()).toEqual('DreJI95');
})

test('calls the engineer role prototype function', () => {

    const engineer = new Engineer('Andre',1,'andre.ji.moseley@gmail.com','DreJI95');

    expect(engineer.getRole()).toEqual('Engineer');
})