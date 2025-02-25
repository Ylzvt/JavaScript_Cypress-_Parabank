class RegistrationPage{
    get firstName() {return cy.get('[id=customer.firstName]')}
    get lastName() {return cy.get('[name="lastName"]')}
    get emailInput() {return cy.get('[name="email"]')}
    get passwordInput() {return  cy.get('[name="password"]')}
    get registerBtn() {return  cy.get('[type="submit"]')}
    get address() {return  cy.get()}
    get city() {return  cy.get()}
    get state() {return  cy.get()}


}
export default new RegistrationPage()