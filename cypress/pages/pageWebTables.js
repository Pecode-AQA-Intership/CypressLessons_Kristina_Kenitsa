class UserAddForm {
    addButton() {
        return cy.get('#addNewRecordButton')
    }

    firstNameForm() {
        return cy.get('#firstName')
    }

    lastNameForm() {
        return cy.get('#lastName')
    }

    emailForm() {
        return cy.get('#userEmail')
    }

    ageForm() {
        return cy.get('#age')
    }

    salaryForm() {
        return cy.get('#salary')
    }

    departmentForm() {
        return cy.get('#department')
    }

    submitButton() {
        return cy.get('#submit')
    }
    usersTable() {
        return cy.get('.rt-tbody').find('[role=row]');
    }
}
export default UserAddForm;