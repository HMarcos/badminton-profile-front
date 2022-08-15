/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Sign in test suite ', () => {
  it('should register successfully', () => {
    cy.visit('http://localhost:3000/sign-in');
    const signUpData = {
      email: faker.internet.email(),
      password: faker.internet.password(),
      get passwordConfirmation() {
        return this.password;
      },
    };
    cy.createUser(signUpData);

    cy.get('#email').type(signUpData.email);
    cy.get('#password').type(signUpData.password);

    cy.intercept('POST', '/sign-in').as('signIn');
    cy.contains('Login').click();
    cy.wait('@signIn');
    cy.url().should('equal', 'http://localhost:3000/');
  });
});
