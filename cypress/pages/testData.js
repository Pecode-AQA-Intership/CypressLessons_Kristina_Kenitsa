const faker = require('faker');

export const URL = {
    mainUrl: "https://demoqa.com/",
    textBoxUrl: "text-box",
    webTablesUrl: "webtables",
    practiceFormUrl: "automation-practice-form"
};

export const USER_DATA = {
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumberFormat(3).split('.').join(''),
    currentAddress: faker.address.streetAddress(),
    permanentAddress: faker.address.secondaryAddress(),
    age: faker.random.number(70),
    salary: faker.random.number(15000),
    department: faker.commerce.department(),
    day: faker.random.number({min: 1, max: 28}),
    month: faker.date.month(),
    year: faker.random.number({min: 1960, max: 2005}),
    subject: "Accounting",
};

export const EDIT_USER_DATA = {
    editName: faker.name.findName(),
    editLastName: faker.name.lastName(),
    editEmail: faker.internet.email(),
    editAge: faker.random.number(70),
    editSalary: faker.random.number(15000),
    editDepartment: faker.commerce.department()
};

