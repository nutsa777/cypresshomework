
describe("Register User", () => {
    it("Register User", () => {
      
  //https://automationexercise.com\
  
  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  cy.visit("http://automationexercise.com");
  
  // 3. Verify that home page is visible successfully
  cy.url().should("eq", 'https://automationexercise.com/')
  
  // 4. Click on 'Signup / Login' button
  cy.get('a[href="/login"]').click();
  //href="/login"
  
  // 5. Verify 'New User Signup!' is visible
  cy.get('.signup-form >h2').should('be.visible').should('have.text','New User Signup!');
  
  // 6. Enter name and email address
  let signupName = 'Nutsa';
  let signupEmail = 'nutsa'+Math.round((Math.random()*1000000)) +'@gmail.com'
  cy.get('[data-qa="signup-name"]').type(signupName).should('have.value',signupName)
  cy.get('[data-qa="signup-email"]').type(signupEmail)
  
  // 7. Click 'Signup' button
  cy.get('[data-qa="signup-button"]').click()
  
  
  // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  cy.get(".login-form> .title > b").should("have.text",'Enter Account Information')
  
  
  // 9. Fill details: Title, Name, Email, Password, Date of birth
  cy.get('[data-qa="name"]').clear().type(signupName);
  //cy.get('[data-qa="email"]').type(signupEmail);
  cy.get('[data-qa="password"]').type("nutsa777")
  cy.get('[data-qa="days"]').select(9)
  cy.get('[data-qa="months"]').select("September")
  cy.get('[data-qa="years"]').select("1996")
  // 10. Select checkbox 'Sign up for our newsletter!'
  cy.get('#newsletter').check()
  
  // 11. Select checkbox 'Receive special offers from our partners!'
  cy.get('#optin').check()
  
  // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  
  cy.get('[data-qa="first_name"]').clear().type('Nutsa')
  cy.get('[data-qa="last_name"]').type("Antadze")
  cy.get('[data-qa="address"]').type("iuhu")
  cy.get('[data-qa="country"]').select("Australia")
  cy.get('[data-qa="state"]').type("test")
  cy.get('[data-qa="city"]').type("sydney")
  cy.get('[data-qa="zipcode"]').type("test1234")
  cy.get('[data-qa="mobile_number"]').type("574504488")
  // 13. Click 'Create Account button'
  cy.get('[data-qa="create-account"]').click()
  
  
  // 14. Verify that 'ACCOUNT CREATED!' is visible
  cy.contains('[data-qa="account-created"]', 'Account Created!').should('be.visible')
  // 15. Click 'Continue' button
  cy.get('[data-qa="continue-button"]').click()
  // 16. Verify that 'Logged in as username' is visible
  cy.get('.navbar-nav')
  .contains('a','Logged in as').should('be.visible')
  .get('b')
  .should('have.text', signupName)
  // 17. Click 'Delete Account' button
  
  cy.get('[href="/delete_account"]').should('contain',"Delete Account",).click()
  
  // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  cy.contains('[data-qa="account-deleted"]', 'Account Deleted!').should('be.visible');
  cy.get('[data-qa="continue-button"]').click()
  });
  }); 
  
  
  
  
  describe('Login User with incorrect email and password', () => {
    it('Login User with incorrect email and password', () => {
  
      //1. Launch browser
      //2. Navigate to url 'http://automationexercise.com'
      cy.visit('http://automationexercise.com');
    
  // 3. Verify that home page is visible successfully
  cy.url().should("eq", 'https://automationexercise.com/');
  
  // 4. Click on 'Signup / Login' button
  cy.get('a[href="/login"]').click();
  
  // 5. Verify 'Login to your account' is visible
  cy.get('.login-form > h2').should('be.visible').should('have.text','Login to your account');
  
  //6. Enter correct email address and password
  let loginEmail = 'nutsa77@gmail.com'
  let loginPassword = 'nutsa777'
  cy.get('[data-qa="login-email"]').type(loginEmail)
  cy.get('[data-qa="login-password"]').type(loginPassword).should('have.value',loginPassword)
  
  
  
  //7. Click 'login' button
  cy.get('[data-qa="login-button"]').click() 
  
  
    })
  }) 
  
  
  describe("Register User with existing email", () => {
    it("Register User with existing email", () => {
      
  
  
  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  cy.visit("http://automationexercise.com");
  // 3. Verify that home page is visible successfully
  cy.url().should("eq", 'https://automationexercise.com/')
  
  // 4. Click on 'Signup / Login' button
  cy.get('a[href="/login"]').click();
  //href="/login"
  
  // 5. Verify 'New User Signup!' is visible
  cy.get('.signup-form >h2').should('be.visible').should('have.text','New User Signup!');
  
  // 6. Enter name and email address
  let signupName = 'nutsa';
  let signupEmail = 'nutsa77@gmail.com'
  cy.get('[data-qa="signup-name"]').type(signupName).should('have.value',signupName)
  cy.get('[data-qa="signup-email"]').type(signupEmail)
  
  // 7. Click 'Signup' button
  cy.get('[data-qa="signup-button"]').click() 
  
  
    })
  })
  
  
  describe("Register User", () => {
    it("Register User", () => {
  // 1. lounch browser
  
  cy.visit ('https://redmed.ge/')
  // 2. Click on 'signup' button
  cy.get('.register > .ng-tns-c144-0').click()
  
  // 3. Verify 'მომხმარებლისრეგისტრაცია' is visible
  cy.get('form.ng-untouched > .text-center').should('be.visible').should('have.text','მომხმარებლისრეგისტრაცია');
  
  // 9. Fill details: სახელი,გვარი,მობილურის ნომერი, ელ-ფოსტა
  cy.get('#userName').type('ნუცა')
  cy.get('#lastName').type('ანთაძე')
  cy.get('#mobileNumber').type(574504488)
  cy.get('#email').type('nutsaantadze777@gmail.com')
  
  
  })
  })  
  
  
  describe('Login User with correct email and password', () => {
    it('Login User with correct email and password', () => {
  
      //1. Launch browser
      //2. Navigate to url 'https://tkt.ge/'
      cy.visit('https://tkt.ge/');
    //3.click 'ავტორიზაცია' button
    cy.get('.icon-avatar') .click()
  
  //4. Enter correct email address and password
  let loginEmail = 'nutsa.antadze.2015.tsu.ens.edu@gmail.com'
  let loginPassword = 'nutsa777'
  cy.get('.sc-7308a0bd-0 > :nth-child(2)').type(loginEmail)
  cy.get('.sc-7308a0bd-0 > :nth-child(3)').type(loginPassword)
  //5click "შესვლა" button
  cy.get('.sc-756e797e-0 > #continueButton2') .click()
  
  
  })
  })
    
  