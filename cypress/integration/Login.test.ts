describe("test for login", () => {
    let elementJson
    let userJson
    beforeEach(() => {
        cy.visit('/'); //to visit website
        
        cy.fixture('elementId').then(function (data) {
            elementJson = data;
          })
          cy.fixture('userData').then(function (data) {
            userJson = data;
          })
    });
        it("login test", () => {
    cy.clickBtn(elementJson.signIn); //to click on sign in button
    cy.enterText(elementJson.loginEmail,userJson.emailId); //to fill the field of email id
    cy.enterText(elementJson.loginPassword,userJson.password); //to fill the field of password
    cy.clickBtn(elementJson.loginButton); //to click on enter
    
  });
});
