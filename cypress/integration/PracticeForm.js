import {createNewStudent} from "../module/testPracticeForm";
import {USER_DATA, URL} from "../pages/testData";

describe("Add new student", () => {

    beforeEach(() => {
        cy.visit(URL.mainUrl + URL.practiceFormUrl);
    })

    it("Check that entering data will submit", () => {
      createNewStudent();
    });
})
