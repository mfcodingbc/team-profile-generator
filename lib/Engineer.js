const Employee = require('../lib/Employee');

github = "samiam"

class Engineer extends Employee {
    constructor() {
        super(
            {
                name,
                id,
                email,
                role
            }
        )

        this.github = github
    }

    getGithub() {
        if (typeof github !== 'string') {
            return false;
        }
        return github;
    }

    getRole() {
        return role = "Engineer";
    }
};

module.exports = Engineer;