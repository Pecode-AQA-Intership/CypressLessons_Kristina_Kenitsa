import {createNewStudent, checkThatParametersAdded} from "../module/testPracticeForm";
import {URL} from "../pages/testData";

describe("Add new student", () => {

    beforeEach(() => {
        cy.visit('/' + URL.practiceFormUrl);
    })

    it("Verify that a new student will be added with valid data ", () => {
        createNewStudent();
    });

    it("Verify that all parameters of created student will be added to the table", () => {
        createNewStudent();
        checkThatParametersAdded();
    });
})
