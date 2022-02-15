class NewStudentForm {

    firstNameInput() {
        return cy.get('#firstName');
    }

    lastNameInput() {
        return cy.get('#lastName');
    }

    emailInput() {
        return cy.get('#userEmail');
    }

    genderOption() {
        return cy.get('#gender-radio-1');
    }

    mobileInput() {
        return cy.get('#userNumber');
    }

    dayInput() {
        return cy.get('.react-datepicker__day');
    }

    monthInput() {
        return cy.get('.react-datepicker__month-select');
    }

    dateOfBirthInput() {
        return cy.get('#dateOfBirthInput');
    }

    subjectsInput() {
        return cy.get('#subjectsContainer');
    }

    hobbiesOption() {
        return cy.get('#hobbies-checkbox-1');
    }

    currentAddressInput() {
        return cy.get('#currentAddress');
    }

    stateOptionInput() {
        return cy.get('#state');
    }

    cityOptionInput() {
        return cy.get('#city');
    }

    submitButton() {
        return cy.get('#submit');
    }
}

export default NewStudentForm;
