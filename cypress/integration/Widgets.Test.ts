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
        })
    })

    it("Widgets Test: Accordion", () => {
        cy.visit('/Accordion.html')
        //cy.clickBtn(elementJson.accordion);
        //cy.clickBtn(elementJson.accordion1);
        cy.get(":nth-child(1) > .panel-heading > .panel-title > a > b").should('contain.text','Group 1')
        cy.get(":nth-child(2) > .panel-heading > .panel-title > a > b").should('contain.text','Group 2')
        cy.get(":nth-child(3) > .panel-heading > .panel-title > a > b").should('contain.text','Group 3')
        cy.get(":nth-child(4) > .panel-heading > .panel-title > a > b").should('contain.text','Group 4')
        // cy.contains('NTest your web application').should('be.visible')

        cy.clickBtn(":nth-child(1) > .panel-heading > .panel-title > a > b")
        cy.wait(2000)
        cy.clickBtn(":nth-child(2) > .panel-heading > .panel-title > a > b")
        cy.wait(2000)
        cy.clickBtn(":nth-child(4) > .panel-heading > .panel-title > a > b")
        cy.wait(5000)
    })
    it("Widgets Test: AutoComplete", () => {
            cy.visit('/AutoComplete.html')
        //cy.clickBtn(elementJson.accordion);
        //cy.clickBtn(elementJson.autocomplete);
        cy.enterText(elementJson.autocomplete1,userJson.widgetAutocomplete)
    })
    it("Widgets Test: DatePicker", () => {
        cy.visit('/Datepicker.html')
        //cy.clickBtn(elementJson.accordion)
        // cy.clickBtn(elementJson.datePicker)
        cy.clickBtn("#datepicker2")
        cy.clickBtn(".dp1652941800000")
    })

    it.only("Widgets Test: ui slider handle",()=>{
        cy.visit('/Slider.html')
        cy.log("slider set to 10%")
      .get(".ui-slider-handle")
      .invoke("attr", "style", "left:10%") // Type-1 for moving slider
      .wait(2000)
      .log("slider set to 80%")
      .get(".ui-slider-handle")
      .then(($slide) => {
        $slide[0].setAttribute("style", "left:80%"); //Type-2  for moving slider
        
      });
      
    cy.get('.ui-slider-handle').should('have.attr','style','left:80%')

    })
})