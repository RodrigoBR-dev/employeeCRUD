describe('Employee Management', () => {
  it('should display the employee list', () => {
    cy.visit('/');
    cy.contains('Employee List');
  });

  it('should create a new employee', () => {
    cy.visit('/create');
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="cpf"]').type('12345678900');
    // Fill out the rest of the form fields
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/');
    cy.contains('John Doe');
  });
});
