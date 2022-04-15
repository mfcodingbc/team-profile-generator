const Manager = require('../lib/Manager');

test('checks if all info for Manager is provided and accurate', () => {
    const manager = new Manager;

    expect(manager.getName()).toBe(name);
    expect(manager.getId()).toBe(id);
    expect(manager.getEmail()).toBe(email);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
    expect(manager.getRole()).toBe(role);

    console.log(`Role: ${role}, Manager Name: ${name}, Manager ID: ${id}, Manager Email: ${email}, Office Number: ${officeNumber}`);
});