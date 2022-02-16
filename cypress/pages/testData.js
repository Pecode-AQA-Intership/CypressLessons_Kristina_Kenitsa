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
    age: faker.random.number(70),
    salary: faker.random.number(15000),
    department: faker.commerce.department(),
};

export const OTHER_USER_DATA = {
    phoneNumber: faker.phone.phoneNumberFormat(3).split('.').join(''),
    currentAddress: faker.address.streetAddress(),
    permanentAddress: faker.address.secondaryAddress(),
    day: faker.random.number({min: 1, max: 28}),
    month: faker.date.month(),
    year: faker.random.number({min: 2014, max: 2050}),
    subject: ["Accounting", "Math", "English", "Economics"]
}

export let randomSubject = Math.floor(Math.random() * OTHER_USER_DATA["subject"].length);

export const EDIT_USER_DATA = {
    editName: faker.name.firstName(),
    editLastName: faker.name.lastName(),
    editEmail: faker.internet.email(),
    editAge: faker.random.number(70),
    editSalary: faker.random.number(15000),
    editDepartment: faker.commerce.department()
};

