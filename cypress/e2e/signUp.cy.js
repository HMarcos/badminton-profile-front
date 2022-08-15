/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Sign up test suite ', () => {
  it('should register successfully', () => {
    cy.visit('http://localhost:3000/sign-up');
    const signUpData = {
      email: faker.internet.email(),
      password: faker.internet.password(),
      get passwordConfirmation() {
        return this.password;
      },
    };
    cy.get('#email').type(signUpData.email);
    cy.get('#password').type(signUpData.password);
    cy.get('#passwordConfirmation').type(signUpData.passwordConfirmation);

    cy.intercept('POST', '/sign-up').as('signUp');
    cy.contains('Cadastrar').click();
    cy.wait('@signUp');
    cy.url().should('equal', 'http://localhost:3000/sign-in');
  });
});
