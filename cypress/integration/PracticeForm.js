import {createNewStudent} from "../module/testPracticeForm";
import {URL} from "../pages/testData";

describe("Add new student", () => {

    beforeEach(() => {
        cy.visit('/' + URL.practiceFormUrl);
    })

    it("Verify that a new student will be added with valid data ", () => {
        createNewStudent();
    });
})
