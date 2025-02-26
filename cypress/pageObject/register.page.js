class RegistrationPage{
    get firstName() {return cy.get('[id="customer.firstName"]')}
    get lastName() {return cy.get('[id="customer.lastName"]')}
    get userName() {return cy.get('[id="customer.username"]')}
    get password() {return  cy.get('[id="customer.password"]')}
    get passwordRe() {return  cy.get('[id="repeatedPassword"]')}
    get registerBtn() {return  cy.get('[value="Register"]')}
    get address() {return  cy.get('[id="customer.address.street"]')}
    get city() {return  cy.get('[id="customer.address.city"]')}
    get zipCode() {return  cy.get('[id="customer.address.zipCode"]')}
    get phoneNum() {return  cy.get('[id="customer.phoneNumber"]')}
    get ssn() {return  cy.get('[id="customer.ssn"]')}
    get state() {return  cy.get('[id="customer.address.state"]')}
    
}
export default new RegistrationPage()