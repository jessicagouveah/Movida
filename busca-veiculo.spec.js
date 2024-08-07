describe('Vehicle Search Test', () => {
  it('should search for a vehicle successfully', () => {
    cy.visit('/');
    cy.get('#search-input').type('modelo-do-veiculo');
    cy.get('button[type="submit"]').click();
    cy.get('.vehicle-result').should('contain', 'modelo-do-veiculo');
  });
});
