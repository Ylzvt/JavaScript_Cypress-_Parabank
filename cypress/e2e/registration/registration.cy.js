import homePage from "../../pageObject/home.page";
import registerPage from "../../pageObject/register.page";

describe("User Registration Test", () => {
  let user;

  before(() => {
    cy.generateUser().then((generatedUser) => {
      user = generatedUser;
    });
  });
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new user", () => {
    homePage.registerBtn.click();
    cy.then(() => {
      registerPage.firstName.type(user.firstName);
      registerPage.lastName.type(user.lastName);
      registerPage.address.type(user.address);
      registerPage.city.type(user.city);
      registerPage.state.type(user.state);
      registerPage.zipCode.type(user.zipCode);
      registerPage.phoneNum.type(user.phone);
      registerPage.ssn.type(user.ssn);
      registerPage.userName.type(user.username);
      registerPage.password.type(user.password);
      registerPage.passwordRe.type(user.password);
      registerPage.registerBtn.click();
      cy.contains(
        "Your account was created successfully. You are now logged in."
      ).should("be.visible");
    });
  });

  it("Should not register with existing user", () => {
    homePage.registerBtn.click();
    cy.then(() => {
      registerPage.firstName.type(user.firstName);
      registerPage.lastName.type(user.lastName);
      registerPage.address.type(user.address);
      registerPage.city.type(user.city);
      registerPage.state.type(user.state);
      registerPage.zipCode.type(user.zipCode);
      registerPage.phoneNum.type(user.phone);
      registerPage.ssn.type(user.ssn);
      registerPage.userName.type(user.username);
      registerPage.password.type(user.password);
      registerPage.passwordRe.type(user.password);
      registerPage.registerBtn.click();
      cy.get('[id="customer.address.state"]').should("be.visible");
    });
  });
  it("Should not register with empty inputs", () => {
    homePage.registerBtn.click();
    registerPage.registerBtn.click();
  });
  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.task("clearCache");
    cy.reload();
  });
});
