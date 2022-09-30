describe("MainCover has Properties", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("The Open Source ");
    cy.contains("Security Platform");
    cy.contains(
      "Unified XDR and SIEM protection for endpoints and cloud workloads."
    );
  });
});
