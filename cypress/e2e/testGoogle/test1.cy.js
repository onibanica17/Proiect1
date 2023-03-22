describe("Site Google.com", () => {
  //Testul nr 1
  it("functioneaza cu o cautare basic", () => {
    cy.visit("https://google.com");
    cy.get("#L2AGLb").click();
    cy.get(".gLFyf").type("vlog de it").type("{enter}"); //"." in fata pentru ca e clasa, "#" daca e id, "[]" daca e un atribut oarecare

    cy.get("#result-stats").should("exist");
  });
});
