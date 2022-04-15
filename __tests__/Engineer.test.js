const Engineer = require('../lib/Engineer');

test('checks if all info for Engineer is provided and accurate', () => {
    const engineer = new Engineer;

    expect(engineer.getName()).toBe(name);
    expect(engineer.getId()).toBe(id);
    expect(engineer.getEmail()).toBe(email);
    expect(engineer.getGithub()).toBe(github);
    expect(engineer.getRole()).toBe(role);

    console.log(`Role: ${role}, Engineer Name: ${name}, Engineer ID: ${id}, Engineer Email: ${email}, GitHub Username: ${github}`);
});