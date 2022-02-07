import UserAddForm from '../pages/pageWebTables';
import { URL, USER_DATA } from '../pages/testData';
const addNewUserForm = new UserAddForm;


describe("Add user", () => {
    beforeEach(() => {
        cy.visit(URL.mainUrl + URL.webTablesUrl);
    })

    it("Verify that user will be add", () => {
        addNewUserForm.addButton().should("be.visible").click();
        addNewUserForm.firstNameForm().type(USER_DATA.name).should("be.visible");
        addNewUserForm.lastNameForm().type(USER_DATA.lastName).should("be.visible");
        addNewUserForm.emailForm().type(USER_DATA.email).should("be.visible");
        addNewUserForm.ageForm().type(USER_DATA.age).should("be.visible");
        addNewUserForm.salaryForm().type(USER_DATA.salary).should("be.visible");
        addNewUserForm.departmentForm().type(USER_DATA.department).should("be.visible");
        addNewUserForm.submitButton().should("be.visible").click();
        addNewUserForm.usersTable().contains(USER_DATA.name).parent().find('[id*="edit-record"]').click();
        addNewUserForm.firstNameForm().clear().type(USER_DATA.editName).should("be.visible");
        addNewUserForm.emailForm().clear().type(USER_DATA.editEmail).should("be.visible");
        addNewUserForm.submitButton().should("be.visible").click();
        addNewUserForm.usersTable().contains(USER_DATA.editName).parent().find('[id*="delete-record"]').click();
        addNewUserForm.usersTable().contains(USER_DATA.editName).should('not.exist');
    });
})
