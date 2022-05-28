import widgetsPage from "../../page-objects/widgetsPage";

describe("test for widgets", () => {
  let elementJson;
  let userJson;
  beforeEach(() => {
    //cy.visit("/Register.html");

    cy.fixture("elementId").then(function (data) {
      elementJson = data;
    });

    cy.fixture("userData").then(function (data) {
      userJson = data;
    });
  });

  it("Widgets Test: Accordion", () => {
    widgetsPage.openAccordion(); //to visit on url

    cy.get(elementJson.accordionG1).should("contain.text","Group 1 - Readability"); //to check text contain or not
    cy.get(elementJson.accordionG2).should("contain.text", "Group 2"); //to check text contain or not
    cy.get(elementJson.accordionG3).should("contain.text", "Methhod Chaining"); //to check text contain or not
    cy.get(elementJson.accordionG4).should("contain.text", "Group 4"); //to check text contain or not
    widgetsPage.panelHeading.should('have.css', 'background-color','rgb(76, 174, 234)') //to check background color
    //cy.get(':nth-child(4) > .panel-heading').should('have.css', 'background-color','rgb(159, 196, 231)') //to check background color
    

    cy.clickBtn(elementJson.accordionG1); //to click on Collapsible Group 1
    cy.wait(2000);
    cy.clickBtn(elementJson.accordionG2); //to click on Collapsible Group 2
    cy.wait(2000);
    cy.clickBtn(elementJson.accordionG4); //to click on Collapsible Group 4
    cy.wait(5000);
    cy.contains("NTest your web application").should("be.visible"); //to check 'NTest your web application' in page
  });
  it("Widgets Test: AutoComplete", () => {
    widgetsPage.openAutoComplete();
    //cy.clickBtn(elementJson.accordion);
    //cy.clickBtn(elementJson.autocomplete);
    cy.enterText(elementJson.autocomplete1, userJson.widgetAutocomplete);
  });
  it("Widgets Test: DatePicker", () => {
    widgetsPage.openDatePicker();
    //cy.clickBtn(elementJson.accordion)
    // cy.clickBtn(elementJson.datePicker)
    cy.clickBtn("#datepicker2");
    cy.clickBtn(".dp1652941800000");
  });

  it("Widgets Test: ui slider handle", () => {
   widgetsPage.openSlider()
    cy.log("slider set to 10%")
      .get(".ui-slider-handle").invoke("attr", "style", "left:10%") // Type-1 for moving slider at 10%
      .wait(2000)

      .log("slider set to 80%")
      .get(".ui-slider-handle").then(($slide) => {
        $slide[0].setAttribute("style", "left:80%"); //Type-2  for moving slider at 80%
      });

    cy.get(".ui-slider-handle").should("have.attr", "style", "left:80%");   //to check slider moving at exact 
  });
});
