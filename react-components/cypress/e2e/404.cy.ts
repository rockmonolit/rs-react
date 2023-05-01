describe('Error Page', () => {
  it('should open the error page on invalid path', () => {
    cy.visit('/404');
    cy.contains('404').should('be.visible');
    cy.contains('Something went wrong').should('be.visible');
  });
});
