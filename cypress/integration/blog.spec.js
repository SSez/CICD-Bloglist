/// <reference types="cypress" />
describe('Blog app', function () {
  it('Login page can be opened', function () {
    cy.visit('http://localhost:3002'); // eslint-disable-line
    cy.contains('Login to application'); // eslint-disable-line
  })
  it('You could try to login', function () {
    cy.visit('http://localhost:3002'); // eslint-disable-line
    cy.contains('login').click(); // eslint-disable-line
  })
})