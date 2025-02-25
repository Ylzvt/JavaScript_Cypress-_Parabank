// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




// import { registerCommand } from 'cypress-wait-for-stable-dom'
// registerCommand()

import { faker } from '@faker-js/faker';
Cypress.Commands.add('generateUser', () => {
    const password = faker.internet.password({ length: 10, memorable: true });
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        phone: faker.phone.number('(###) ###-####'),
        ssn: faker.string.numeric(9).replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3'),
        username: faker.internet.email(),
        password: password,
        confirm: password
    };
});