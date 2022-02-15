import UserAddForm from "../pages/pageWebTables";
import {USER_DATA, EDIT_USER_DATA} from "../pages/testData";

const newUserForm = new UserAddForm;

export function createNewUser() {
    newUserForm.addButton().should("be.visible").click();
    newUserForm.firstNameForm().type(USER_DATA.name).should("be.visible");
    newUserForm.lastNameForm().type(USER_DATA.lastName).should("be.visible");
    newUserForm.emailForm().type(USER_DATA.email).should("be.visible");
    newUserForm.ageForm().type(USER_DATA.age).should("be.visible");
    newUserForm.salaryForm().type(USER_DATA.salary).should("be.visible");
    newUserForm.departmentForm().type(USER_DATA.department).should("be.visible");
    newUserForm.submitButton().should("be.visible").click();
}

export function editUser() {
    newUserForm.usersTable().contains(USER_DATA.name).parent().find("[id*='edit-record']").click();
    newUserForm.firstNameForm().clear().type(EDIT_USER_DATA.editName).should("be.visible");
    newUserForm.lastNameForm().clear().type(EDIT_USER_DATA.editLastName).should("be.visible");
    newUserForm.emailForm().clear().type(EDIT_USER_DATA.editEmail).should("be.visible");
    newUserForm.ageForm().clear().type(EDIT_USER_DATA.editAge).should("be.visible");
    newUserForm.salaryForm().clear().type(EDIT_USER_DATA.editSalary).should("be.visible");
    newUserForm.departmentForm().clear().type(EDIT_USER_DATA.editDepartment).should("be.visible");
    newUserForm.submitButton().should("be.visible").click();
}

export function findUser() {
    for (let property in USER_DATA) {
        newUserForm.searchField().clear().type(EDIT_USER_DATA[property]);
        newUserForm.searchButton().click();
        newUserForm.usersTable().contains(EDIT_USER_DATA[property]).should("be.exist");
    }
    newUserForm.searchField().clear();
}

export function deleteUser() {
    newUserForm.usersTable().contains(EDIT_USER_DATA.editName).parent().find("[id*='delete-record']").click();
    newUserForm.usersTable().contains(EDIT_USER_DATA.editName).should("not.exist");
}

export function getTextAsArray(n) {
    newUserForm.sortByName().eq(n).click();
    let textArray = [];
    return new Cypress.Promise(resolve => {
        cy.get(`.rt-td:nth-child(${n + 1})`)
            .each(($el) => {
                textArray.push($el.text());
            })
            .then(() => resolve(textArray));
    });
}

export function sortUsersForm() {
    for (let n = 0; n < 6; n++) {
        switch (n) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 5:
                getTextAsArray(n).then(textArray => {
                    let actual = textArray.slice();
                    cy.wrap(actual).should("deep.eq", textArray.sort());
                });
                break;
            case 4:
                getTextAsArray(n).then(textArray => {
                    let actual = textArray.slice();
                    cy.wrap(actual).should("deep.eq", actual.sort(function (a, b) {
                        return a - b
                    }));
                });
                break;
            default:
        }
    }
}