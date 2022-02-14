class UserAddForm {

    addButton() {
        return cy.get('#addNewRecordButton')
    };

    firstNameForm() {
        return cy.get('#firstName')
    };

    lastNameForm() {
        return cy.get('#lastName')
    };

    emailForm() {
        return cy.get('#userEmail')
    };

    ageForm() {
        return cy.get('#age')
    };

    salaryForm() {
        return cy.get('#salary')
    };

    departmentForm() {
        return cy.get('#department')
    };

    submitButton() {
        return cy.get('#submit')
    };

    usersTable() {
        return cy.get('.rt-tbody').find('[role=row]');
    };

    searchField() {
        return cy.get('#searchBox');
    };

    searchButton() {
        return cy.get('.input-group-append')
    };

    sortByName() {
        return cy.get('.rt-resizable-header-content');
    };
}

export default UserAddForm;
