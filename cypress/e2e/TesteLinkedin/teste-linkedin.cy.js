describe("On LinkeDin", () => {
  it("I can login", () => {
    cy.visit("https://linkedin.com");
    cy.get(".nav__button-secondary").click();
    cy.get("#username").type("onibanica@gmail.com");
    cy.get("#password").type("trivale2013");
    cy.get(".btn__primary--large").click();
    cy.get("#ember16").should("exist");
  });
});
