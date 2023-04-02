describe('opening and closing ingredient details popup', () => {
  it('should handle opening and closing ingredient details popup', () => {
    cy.visit('/');
    cy.get('div').contains('Говяжий метеорит (отбивная)').click();
    cy.get("div[class^='Modal_popup_']").as("modalPopup");
    cy.get("@modalPopup").should('exist');
    cy.get("@modalPopup")
      .should('contain', "Говяжий метеорит (отбивная)")
      .and('contain', "Калории,ккал")
      .and('contain', "Белки, г");
    cy.get("div[class^='Modal_closeButton_']").click();
    cy.get("@modalPopup").should('not.exist');
  })

})