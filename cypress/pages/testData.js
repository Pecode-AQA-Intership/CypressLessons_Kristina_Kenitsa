const faker = require('faker');
export const USER_DATA = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  currentAddress: faker.address.streetAddress(),
  permanentAddress: faker.address.streetAddress(),
};
export const URL = 'https://demoqa.com/text-box';
