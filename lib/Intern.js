const Employee = require('../lib/Employee');

school = "Cool College"

class Intern extends Employee {
    constructor() {
        super(
            {
                name,
                id,
                email,
                role
            }
        )

        this.school = school;
    }

    getSchool() {
        if (typeof school !== 'string') {
            return false;
        }
        return school;
    };

    getRole() {
        return role = "Intern";
    }
};

module.exports = Intern;