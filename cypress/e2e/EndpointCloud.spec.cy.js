describe("MainCover has Properties", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("Endpoint Security");
    cy.contains("Threat Intelligence");
    cy.contains("Security Operations");
    cy.contains("Cloud Security");
  });
});
