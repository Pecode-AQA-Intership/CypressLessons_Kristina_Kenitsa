export const URL = {
  mainUrl: 'https://demoqa.com/',
  textBoxUrl: 'text-box',
  webTablesUrl: 'webtables'
};
const faker = require('faker');
export const USER_DATA = {
  name: faker.name.findName(),
  lastName: faker.name.lastName(),
  editName: faker.name.findName(),
  email: faker.internet.email(),
  editEmail: faker.internet.email(),
  currentAddress: faker.address.streetAddress(),
  permanentAddress: faker.address.secondaryAddress(),
  age: faker.random.number(70),
  salary: faker.random.number(15000),
  department: faker.commerce.department()
};