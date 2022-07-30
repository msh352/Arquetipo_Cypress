import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, title => {
  cy.title().should("include", title);
});

Then(`I waiting load {string}`, url_contains => {
    cy.url().should('include', url_contains);
});