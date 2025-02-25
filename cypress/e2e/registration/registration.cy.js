import homePage from "../../pageObject/home.page"
import registerPage from "../../pageObject/register.page";


describe("Registration", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Should register a new user account", () =>{
    //Register
    homePage.registerBtn.click()
    cy.generateUser().then((user) => {
     registerPage.firstName.type(user.firstName);
     registerPage.lastNametype(user.lastName);
     registerPage.emailInput.type(user.email);
    });
    })
})