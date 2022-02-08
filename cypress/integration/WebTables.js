import { URL, EDIT_USER_DATA } from '../pages/testData.js';
import { createNewUser, editUser, deleteUser, findUser } from '../module/testWebTable.js'

describe("Add user", () => {
    beforeEach(() => {
        cy.visit(URL.mainUrl + URL.webTablesUrl);
    })

    it("Verify that user will be add", () => {
        createNewUser();
        editUser();
        findUser(EDIT_USER_DATA);
        deleteUser();
    });
})
