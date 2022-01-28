describe('My First Test', () => {
    it('Gets, types and asserts', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
  
      // Get an input, type into it and verify that the value has been updated
      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
  })

/*   1. Visit: https://example.cypress.io
     2. Find the element with content: type
     3. Click on it
     4. Get the URL
     5. Assert it includes: /commands/actions
     6. Get the input with the .action-email class
     7. Type fake@email.com into the input
     8. Assert the input reflects the new value
*/

//Sau folisind sintaxa Gherkin

/*  Given a user visits https://example.cypress.io
    When they click the link labeled type
    And they type "fake@email.com" into the .action-email input
    Then the URL should include /commands/actions
    And the .action-email input has "fake@email.com" as its value
*/


  