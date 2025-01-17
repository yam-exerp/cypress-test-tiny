describe('page', () => {
  it('it works', () => {
    cy.visit('index.html')
    cy.viewport(600, 400)
    const viewportWidth = Cypress.config('viewportWidth')
    // cy.log(`viewportWidth: ${viewportWidth}`) // viewportWidth: 1000
    expect(viewportWidth).to.equal(1000)
  })

  it('it does not work', () => {
    cy.visit('index.html')
    cy.viewport(600, 400)
    const viewportWidth = Cypress.config('viewportWidth')
    // cy.log(`viewportWidth: ${viewportWidth}`) // viewportWidth: 1000
    expect(viewportWidth).to.equal(600)
  })
})
