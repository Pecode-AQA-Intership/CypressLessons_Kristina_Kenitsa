import {URL, EDIT_USER_DATA} from '../pages/testData.js';
import {createNewUser, editUser, deleteUser, findUser, sortUsersForm} from '../module/testWebTable.js'

describe("User forms actions", () => {

    beforeEach(() => {
        cy.visit(URL.mainUrl + URL.webTablesUrl);
    })

    it("Verify that user can be added,edit user data, find the created user,sort user by different parameters and delete user.", () => {
        createNewUser();
        editUser();
        findUser(EDIT_USER_DATA);
        deleteUser();
        sortUsersForm();
    });
})

