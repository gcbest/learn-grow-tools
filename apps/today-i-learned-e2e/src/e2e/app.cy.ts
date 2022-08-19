import { getGreeting } from '../support/app.po';

describe('today-i-learned', () => {
  beforeEach(() => cy.visit('/'));
  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome today-i-learned');
  });

  describe('routes', () => {
    it('displays correct heading when navigating to shows route', () => {
      cy.visit('/');
      cy.findByRole('heading', { name: /t3/i }).should('exist');
    });
  });

  describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true);
    });
  });
});

export {};
