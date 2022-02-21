export default class LoginForm {

    nameForm() {
        return cy.get('#userName')
    }

    emailForm() {
        return cy.get('#userEmail')
    }

    currentAddressForm() {
        return cy.get('#currentAddress-wrapper  #currentAddress')
    }

    permanentAddressForm() {
        return cy.get('#permanentAddress-wrapper  #permanentAddress')
    }

    nameResult() {
        return cy.get('#name')
    }

    emailResult() {
        return cy.get('#email')
    }

    currentAddressResult() {
        return cy.get('#output  #currentAddress')
    }

    permanentAddressResult() {
        return cy.get('#output  #permanentAddress')
    }

    buttonSubmit() {
        return cy.get('#submit')
    }
}
