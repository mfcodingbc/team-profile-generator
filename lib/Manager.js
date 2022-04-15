const Employee = require('../lib/Employee');

officeNumber = 1;

class Manager extends Employee {
    constructor() {
        super(
            {
                name,
                id,
                email,
                role
            }
        );

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        if (typeof officeNumber !== 'number') {
            return false;
        }
        return officeNumber;
    }

    getRole() {
        return role = "Manager";
    }
};

module.exports = Manager;