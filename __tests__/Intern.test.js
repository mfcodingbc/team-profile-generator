const Intern = require('../lib/Intern');

test('checks if all info for Intern is provided and accurate', () => {
    const intern = new Intern;

    expect(intern.getName()).toBe(name);
    expect(intern.getId()).toBe(id);
    expect(intern.getEmail()).toBe(email);
    expect(intern.getSchool()).toBe(school);
    expect(intern.getRole()).toBe(role);

    console.log(`Role: ${role}, Intern Name: ${name}, Intern ID: ${id}, Intern Email: ${email}, School: ${school}`);
});
