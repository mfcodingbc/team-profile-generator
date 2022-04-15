const Employee = require('../lib/Employee');

test('checks if all info is provided and accurate', () => {
    const employee = new Employee;

    expect(employee.getName()).toBe(name);
    expect(employee.getId()).toBe(id);
    expect(employee.getEmail()).toBe(email);
    expect(employee.getRole()).toBe("Employee");

    console.log(`Employee role: ${role}, Employee Name: ${name}, Employee ID: ${id}, Employee Email: ${email}`);
});