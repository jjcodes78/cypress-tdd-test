import {faker} from "@faker-js/faker";

export default {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: '12345678',
    birthDay: '9',
    birthMonth: '12',
    birthYear: '1978',
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    postcode: '90455',
    phone: faker.phone.phoneNumber('+55###########')
}