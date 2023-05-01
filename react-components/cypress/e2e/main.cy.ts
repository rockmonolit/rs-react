describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should switch between pages', () => {
    cy.contains('About Us').click();
    cy.url().should('include', '/about');
    cy.contains('Form').click();
    cy.url().should('include', '/form');
  });

  it('should open modal window on click', () => {
    cy.contains('[class=card]', 'Rick').click();
    cy.get('[class=modal]').should('be.visible');
  });

  it('should close modal window on click', () => {
    cy.contains('[class=card]', 'Rick').click();
    cy.get('[class=modal]').should('be.visible');
    cy.get('.closeIcon').click();
    cy.get('[class=modal]').should('not.exist');
  });

  it('should display error if nothing was found', () => {
    cy.get('.searchCardInput').type('definitelyNotARickAndMortyCharacter');
    cy.contains('Search').click();
    cy.get('.errorText').should('include.text', 'Nothing was found: 404');
  });

  it('should restore search input after page changing', () => {
    cy.get('.searchCardInput').type('fat');
    cy.contains('Search').click();
    cy.contains('About Us').click();
    cy.contains('Main').click();
    cy.get('.searchCardInput').should('have.value', 'fat');
  });
});
