const faker = require('faker');
export const USER_DATA = {
    name: faker.name.findName(),
    email: faker.internet.email(),
};

export const OTHER_USER_DATA = {
    currentAddress: faker.address.streetAddress(),
    permanentAddress: faker.address.streetAddress(),
};

export const TEXT_BOX_URL = 'text-box';
