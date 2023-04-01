describe('constructor drag-and-drop works', () => {
  it('should handle drop from ingredients list to constructor and deletion of ingredient', () => {
    const dataTransfer = new DataTransfer();
    cy.visit('http://localhost:3000');
    cy.get("div").contains("Соус Spicy-X").trigger('dragstart', {dataTransfer});
    cy.get('section[class^="BurgerConstructor_container_"]').as('dropTarget');
    cy.get('@dropTarget').trigger('drop', {dataTransfer});
    cy.get('@dropTarget').should('contain', 'Соус Spicy-X');
    cy.get('span[class^="constructor-element__action"]').click();
    cy.get('@dropTarget').should('not.contain', 'Соус Spicy-X');
  })

  it('should handle drag and drop within constructor', () => {
    const dataTransfer = new DataTransfer();
    cy.visit('http://localhost:3000');
    cy.get('section[class^="BurgerConstructor_container_"]').as('dropTarget');
    cy.get("div").contains("Соус Spicy-X").trigger('dragstart', {dataTransfer});
    cy.get('@dropTarget').trigger('drop', {dataTransfer});
    cy.get("div").contains("Мясо бессмертных моллюсков Protostomia").trigger('dragstart', {dataTransfer});
    cy.get('@dropTarget').trigger('drop', {dataTransfer});
    cy.get("div").contains("Биокотлета из марсианской Магнолии").trigger('dragstart', {dataTransfer});
    cy.get('@dropTarget').trigger('drop', {dataTransfer});
    cy.get('ul[class^="BurgerConstructor_stuffing_"]').children().last().as("draggedIngredient");
    cy.get("@draggedIngredient").trigger('dragstart');
    cy.get('ul[class^="BurgerConstructor_stuffing_"]').children().first().trigger("dragenter", {force: true});
    cy.get('ul[class^="BurgerConstructor_stuffing_"]').children().first().trigger("drop", {force: true});
    cy.get('ul[class^="BurgerConstructor_stuffing_"]').children().first().should('contain', "Биокотлета из марсианской Магнолии");

  })
})