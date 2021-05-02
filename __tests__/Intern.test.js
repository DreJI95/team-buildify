const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {

    const intern = new Intern('Andre',1,'andre.ji.moseley@gmail.com','Seneca');

    expect(intern.name).toBe('Andre');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('calls the intern name prototype function', () => {

    const intern = new Intern('Andre',1,'andre.ji.moseley@gmail.com','Seneca');

    expect(intern.getName()).toBe('Andre');
})

test('calls the intern id prototype function', () => {

    const intern = new Intern('Andre',1,'andre.ji.moseley@gmail.com','Seneca');

    expect(intern.getId()).toEqual('1');
})

test('calls the intern email prototype function', () => {

    const intern = new Intern('Andre',1,'andre.ji.moseley@gmail.com','Seneca');

    expect(intern.getEmail()).toEqual('andre.ji.moseley@gmail.com');
})

test('calls the intern school prototype function', () => {

    const intern = new Intern('Andre',1,'andre.ji.moseley@gmail.com','Seneca');

    expect(intern.getSchool()).toEqual('Seneca');
})

test('calls the intern role prototype function', () => {

    const intern = new Intern('Andre',1,'andre.ji.moseley@gmail.com','Seneca');

    expect(intern.getRole()).toEqual('Intern');
})