const faker = require("faker");

export const URL = {
    textBoxUrl: "text-box",
    webTablesUrl: "webtables"
};

export const USER_DATA = {
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    currentAddress: faker.address.streetAddress(),
    permanentAddress: faker.address.secondaryAddress(),
    age: faker.random.number(70),
    salary: faker.random.number(15000),
    department: faker.commerce.department()
};

export const EDIT_USER_DATA = {
    editName: faker.name.findName(),
    editLastName: faker.name.lastName(),
    editEmail: faker.internet.email(),
    editAge: faker.random.number(70),
    editSalary: faker.random.number(15000),
    editDepartment: faker.commerce.department()
};

