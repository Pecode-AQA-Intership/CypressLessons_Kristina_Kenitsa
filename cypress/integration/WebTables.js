import {URL,USER_DATA} from "../pages/testData.js";
import {createNewUser, editUser,clickOnDeleteButton, deleteUser, findUser, sortUsersForm,checkThatNewUserAdded} from "../module/testWebTable.js"

describe("User forms actions", () => {

    beforeEach(() => {
        cy.visit('/' + URL.webTablesUrl);
    })

    it.only("Verify that user can be added", () => {
        createNewUser();
        checkThatNewUserAdded();
    });

    it("Verify that can edit user data.", () => {
        createNewUser();
        editUser();
    });

    it("Verify that can find the created user.", () => {
        createNewUser();
        findUser(USER_DATA);
    });

    it("Verify that can sort by different parameters.", () => {
        sortUsersForm();
    });

    it("Verify that can delete the created user.", () => {
        createNewUser();
        clickOnDeleteButton()
        deleteUser();
    });
})

