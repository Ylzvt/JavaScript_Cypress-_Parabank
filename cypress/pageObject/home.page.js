class Homepage{
    get loginBtn() {return cy.contains('Log In')}
    get registerBtn() {return cy.contains('Register')}
}
export default new Homepage()