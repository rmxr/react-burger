describe('app works correctly with routes', () => {
  beforeEach(function () {
    cy.visit('/');
  });

  it('should open constructor page by default', function () {
    cy.contains('Соберите бургер');
  });

  it('should open Feed page after Feed button click', function () {
    cy.get('p').contains('Лента заказов').click();
    cy.contains('Готовы');
  });

  it('should open personal page after personal page click', () => {
    cy.get('a').contains("Личный кабинет").click();
    cy.contains("Вход")
  })
});