describe("Pokemon E2E", () => {
  it("should open baseUrl", function () {
    cy.visit("/");

    cy.get('input[data-test="input"]').should("have.value", "");
    cy.get('ul[data-test="pagination"]');
  });

  it("should find some pokemon", function () {
    cy.get('input[data-test="input"]')
      .type("bulbasaur")
      .should("have.value", "bulbasaur");
  });

  it("should open Pokemon page", function () {
    cy.get(".card").contains("bulbasaur").click();
    cy.wait(3000);
    cy.get('button[data-test="back-btn"]').click();
  });
});
