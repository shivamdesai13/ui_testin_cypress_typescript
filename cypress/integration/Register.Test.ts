describe("test for registration", () => {
    let elementJson;
    let userJson;
    beforeEach(() => {
      cy.visit("/Register.html"); //to visit website
  
      cy.fixture("elementId").then(function (data) {
        elementJson = data;
      });
      cy.fixture("userData").then(function (data) {
        userJson = data;
      });
    });
    it("register test", () => {
      cy.enterText(elementJson.enterName, userJson.name); //enter name
      cy.enterText(elementJson.enterLastName, userJson.lastName); //enter last name
      cy.enterText(elementJson.enterAddress, userJson.address); //enter address
      cy.enterText(elementJson.enterEmail, userJson.email); //email id
      cy.enterText(elementJson.mobNo, userJson.number); //contact number
      cy.clickBtn(elementJson.genderF); //select gender
      cy.clickBtn(elementJson.hobby1); //enter hobbies
      cy.clickBtn(elementJson.language); //click on language field
      cy.contains(userJson.languages).click(); //enter language
      cy.clickBtn(elementJson.hobby2); //enter hobbies 2
      cy.selectBtn(elementJson.skills, userJson.skillss); //enter skills
      cy.clickBtn(elementJson.selectCountry); //click on select country
      
      cy.enterText(elementJson.enterCountry, userJson.country); //fill field for select country and enter
      cy.selectBtn(elementJson.birthYear, userJson.bYear); //birth year
      cy.selectBtn(elementJson.birthMonth, userJson.bMonth); // birth month
      cy.selectBtn(elementJson.birthDate, userJson.bDate); // birth date
      cy.enterText(elementJson.registerPassword, userJson.passwordreg); //enter password
      cy.enterText(elementJson.registerPasswordconfirm,userJson.passwordregconfirm); //enter confirm password
      cy.clickBtn(elementJson.selectFile).selectFile(userJson.file); // select file
      cy.clickBtn(elementJson.submitBtn); //submit form
    });
  });
  