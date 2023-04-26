describe('Forms Page', () => {
  it('should open the forms page', () => {
    cy.visit('/form');
    cy.contains('Please, fill the form below');
  });

  it('should not generate card if form fields are empty', () => {
    cy.visit('/form');
    cy.get('.submitButton').click();
    cy.contains('Name is absolutely required!');
    cy.get('.formCard').should('not.exist');
  });

  it('should display error messages if form fields are empty on submit', () => {
    cy.visit('/form');
    cy.get('.submitButton').click();
    cy.contains('Name is absolutely required!');
    cy.contains(`Don't you forget insert a date?`);
    cy.contains('Liar! Each and every cool transformer has a weapon!');
    cy.contains(`It's time to choose a side!`);
    cy.contains('Please, choose your planet.');
    cy.contains('Upload your coolest Holography!');
  });

  it('should generate card if all fields contain valid data', () => {
    cy.visit('/form');

    cy.get('input[type=text]').type('Valid');
    cy.get('input[type=date]').type('1999-01-01');
    cy.get('input[type=checkbox]').click();
    cy.contains('Autobot').click();
    cy.get('.selectInput').select('Akalo');
    cy.get('input[type=file]').selectFile({
      fileName: 'file.jpg',
      contents: ['file'],
    });

    cy.get('.submitButton').click();
    cy.get('.formCard').should('be.visible');
  });
});
