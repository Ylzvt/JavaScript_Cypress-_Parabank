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


import Chance from "chance";
const chance = new Chance();

Cypress.Commands.add("generateUser", () => {
  const password = chance.string({ length: 8, pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" });

  return {
    firstName: chance.first(),
    lastName: chance.last(),
    address: chance.address(),
    city: chance.city(),
    state: chance.state({ full: true }),
    zipCode: chance.zip(),
    phone: chance.phone({ formatted: false }),
    ssn: chance.ssn({ dashes: true }),
    username: chance.email({ domain: "example.com" }), // Ensures uniqueness
    password: password,
    confirm: password,
  };
});