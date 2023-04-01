describe('opening and closing ingredient details popup', () => {
  it('should handle opening and closing ingredient details popup', () => {
    cy.visit('http://localhost:3000');
    cy.get('div').contains('Говяжий метеорит (отбивная)').click();
    cy.get("div[class^='Modal_popup_']").should('exist');
    cy.get("div[class^='Modal_popup_']")
      .should('contain', "Говяжий метеорит (отбивная)")
      .and('contain', "Калории,ккал")
      .and('contain', "Белки, г");
    cy.get("div[class^='Modal_closeButton_']").click();
    cy.get("div[class^='Modal_popup_']").should('not.exist');
  })

})