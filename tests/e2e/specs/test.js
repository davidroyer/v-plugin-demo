// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Contains the default value", () => {
    cy.visit("/");
    // cy.contains("h1", "Welcome to Your Vue.js App");
    cy.get(".ql-editor").contains("Value For Cypress");
    // .type("Hello, World");
  });

  it("Sets content as H1", () => {
    cy.visit("/");
    // cy.contains("h1", "Welcome to Your Vue.js App");
    cy.get("select.ql-header").select("3", { force: true });
    cy.get(".ql-editor").contains("<h3>");
    console.log('cy.get(".ql-editor")', cy.get(".ql-editor"));

    cy.get(".ql-editor")
      .contains("Value For Cypress")
      .type("Hello, World");
  });
});
