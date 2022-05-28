class registerPage{
    openRegister(){
        cy.visit("/Register.html");
    }

    get submitButton(){
        return cy.get('#submitbtn')
    }
}
export default new registerPage