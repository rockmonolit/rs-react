describe('About Page', () => {
  it('should open the "about us" page', () => {
    cy.visit('/about');
    cy.contains('About Us');
  });
});
