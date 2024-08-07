describe('Login Test', () => {
  it('should login successfully', () => {
    cy.visit('/login');
    cy.get('#username').type('seu-usuario');
    cy.get('#password').type('sua-senha');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
