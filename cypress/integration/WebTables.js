import {URL,USER_DATA} from "../pages/testData.js";
import {createNewUser, editUser, deleteUser, findUser, sortUsersForm,} from "../module/testWebTable.js"

describe("User forms actions", () => {

    beforeEach(() => {
        cy.visit('/' + URL.webTablesUrl);
    })

    it("Verify that user can be added", () => {
        createNewUser();
    });

    it("Verify that can edit user data.", () => {
        createNewUser();
        editUser();
    });

    it("Verify that can find the created user and sort by different parameters.", () => {
        createNewUser();
        findUser(USER_DATA);
        sortUsersForm();
    });

    it("Verify that can delete the created user.", () => {
        createNewUser();
        deleteUser();
    });
})

