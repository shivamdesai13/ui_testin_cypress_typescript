class widgetsPage{

    openAccordion(){
        cy.visit("/Accordion.html");
    }
    get panelHeading(){
        return cy.get(':nth-child(4) > .panel-heading')
    }


    openAutoComplete(){
        cy.visit("/AutoComplete.html")
    }


    openDatePicker(){
        cy.visit("/Datepicker.html")
    }


    openSlider(){
        cy.visit("/Slider.html");
    }
}

export default new widgetsPage