import LoginForm from "../pages/pageLogin.js";
import {USER_DATA, URL} from "../pages/testData";
const loginForm = new LoginForm;

describe("Log in", () => {

    beforeEach(() => {
        cy.visit(URL);
    })

    it("Check that entering data will submit", () => {
        loginForm.nameForm().type(USER_DATA.name).should("be.visible");
        loginForm.emailForm().type(USER_DATA.email).should("be.visible");
        loginForm.currentAddressForm().type(USER_DATA.currentAddress).should("be.visible");
        loginForm.permanentAddressForm().type(USER_DATA.permanentAddress).should("be.visible");
        loginForm.buttonSubmit().should("be.visible").click();
        loginForm.nameResult().contains(USER_DATA.name);
        loginForm.emailResult().contains(USER_DATA.email);
        loginForm.currentAddressResult().contains(USER_DATA.currentAddress);
        loginForm.permanentAddressResult().contains(USER_DATA.permanentAddress);
    });
})
