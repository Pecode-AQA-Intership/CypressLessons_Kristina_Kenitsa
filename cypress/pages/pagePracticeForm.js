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


    studentNameField() {
        return cy.get('tr:nth-child(1) td:nth-child(2)');
    }

    studentEmailField() {
        return cy.get('tr:nth-child(2) td:nth-child(2)');
    }

    studentGenderField() {
        return cy.get('tr:nth-child(3) td:nth-child(2)');
    }

    studentMobileField() {
        return cy.get('tr:nth-child(4) td:nth-child(2)');
    }

    studentDateOfBirthField() {
        return cy.get('tr:nth-child(5) td:nth-child(2)');
    }

    studentSubjectsField() {
        return cy.get('tr:nth-child(6) td:nth-child(2)');
    }

    studentHobbiesField() {
        return cy.get('tr:nth-child(7) td:nth-child(2)');
    }

    studentPictureField() {
        return cy.get('tr:nth-child(8) td:nth-child(2)');
    }

    studentAddressField() {
        return cy.get('tr:nth-child(9) td:nth-child(2)');
    }

    studentStateAndCityField() {
        return cy.get('tr:nth-child(10) td:nth-child(2)');
    }

}

export default NewStudentForm;
