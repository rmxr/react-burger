describe('making an order works', () => {
  it('should handle making an order and closing the order popup', () => {
    const dataTransfer = new DataTransfer();
    cy.visit('/');
    cy.get("div").contains("Соус Spicy-X").trigger('dragstart', {dataTransfer});
    cy.get('section[class^="BurgerConstructor_container_"]').as('dropTarget');
    cy.get('@dropTarget').trigger('drop', {dataTransfer});
    cy.get("div").contains("Краторная булка N-200i").trigger('dragstart', {dataTransfer});
    cy.get('section[class^="BurgerConstructor_container_"]').as('dropTarget');
    cy.get('@dropTarget').trigger('drop', {dataTransfer});
    cy.get("button").contains("Оформить заказ").click();
    cy.get("input[name='E-mail']").type("rmxr@yandex.ru");
    cy.get("input[name='Password']").type("asdfasdf{enter}");
    cy.get("button").contains("Оформить заказ").click();
    cy.get("div[class^='Modal_popup_']").should('exist');
    cy.get("div[class^='Modal_closeButton_']").click();
    cy.get("div[class^='Modal_popup_']").should('not.exist');
  })

})