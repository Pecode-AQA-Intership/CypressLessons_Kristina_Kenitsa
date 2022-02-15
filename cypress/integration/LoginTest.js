import LoginForm from '../pages/pageLogin.js';
import {USER_DATA, TEXT_BOX_URL, OTHER_USER_DATA} from '../pages/testData';
const loginForm = new LoginForm;

describe("Log in", () => {
    beforeEach(() => {
        cy.visit('/' + TEXT_BOX_URL);
    })

    it("Verify that entering data will submit", () => {
        loginForm.nameForm().type(USER_DATA.name).should("be.visible");
        loginForm.emailForm().type(USER_DATA.email).should("be.visible");
        loginForm.currentAddressForm().type(OTHER_USER_DATA.currentAddress).should("be.visible");
        loginForm.permanentAddressForm().type(OTHER_USER_DATA.permanentAddress).should("be.visible");
        loginForm.buttonSubmit().should("be.visible").click();
        loginForm.nameResult().should('contain', USER_DATA.name);
        loginForm.emailResult().should('contain', USER_DATA.email);
        loginForm.currentAddressResult().should('contain', OTHER_USER_DATA.currentAddress );
        loginForm.permanentAddressResult().should('contain', OTHER_USER_DATA.currentAddress);
    });
})
