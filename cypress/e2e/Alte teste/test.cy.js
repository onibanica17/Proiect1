describe("Exemplu unde", () => {
  //Test de verificare segment din URL
  // it("verific daca un url contine ceva", () => {
  //   cy.visit(
  //     "https://www.digi24.ro/stiri/actualitate/patru-adolescenti-din-piatra-olt-acuzati-ca-au-spart-doua-scoli-din-oras-ce-au-furat-2291287"
  //   );
  //   cy.url().should("include", "/stiri"); //verifica un segment
  // });

  //testul cu delay
  // it("asteapta 10 secunde", () => {
  //   cy.visit("https://www.google.com");
  //   cy.get("#L2AGLb > .QS5gu").click();
  //   cy.wait(10000);
  //   cy.get(".gLFyf").type("Au trecut 10 secunde");
  // });

  //testul cu selector de timp atribut
  // it("selectez folosind un atribut", () => {
  //   cy.visit("https://www.google.com");
  //   cy.get("#L2AGLb > .QS5gu").click();
  //   cy.get('[alt="Google"]').should("be.visible");
  // });

  //testul screenshot la pagina
  // it("Screenshot la pagina", () => {
  //   cy.visit("https://www.google.com");
  //   cy.get("#L2AGLb > .QS5gu").click();
  //   cy.screenshot();
  // });

  //testul constanta si verificare continut input
  // it("verific o valoare din input", () => {
  //   cy.visit("https://www.google.com");
  //   cy.get("#L2AGLb > .QS5gu").click();
  //   const googleSearch = cy.get(".gLFyf"); //constanta in care bagam campul acela unde cautam pe google
  //   googleSearch.type("123");
  //   googleSearch.should("have.value", "123");
  // });

  //testul verifica existenta unei clase pe un element selectat
  it("verific o valoaredin input", () => {
    cy.visit("https://www.libris.ro/");

    cy.get("#autoCompleteButton").should("have.class", "onSearchClick"); //exista clasa pe buton?
  });
});
