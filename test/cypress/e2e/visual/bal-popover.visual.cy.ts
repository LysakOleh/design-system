describe('bal-popover', () => {
  testPopover('mobile')
  testPopover('desktop')

  function testPopover(platform: 'desktop' | 'mobile') {
    describe(platform, () => {
      beforeEach(() =>
        cy
          .visit('/components/bal-popover/test/bal-popover.visual.html')
          .platform(platform)
          .waitForDesignSystem()
          .wait(32),
      )

      it('basic component ' + platform, () => {
        cy.getByTestId('popover-trigger').click()
        cy.compareSnapshot(`popover-basic-${platform}`)
        cy.get('body').type('{esc}')
      })

      it('arrow backdrop component + platform ', () => {
        cy.getByTestId('popover-arrow-trigger').click()
        cy.compareSnapshot(`popover-arrow-${platform}`)
        cy.get('body').type('{esc}')
      })

      it('tooltip component ' + platform, () => {
        cy.getByTestId('popover-tooltip-trigger').invoke('show').click({ force: true })
        cy.compareSnapshot(`popover-tooltip-${platform}`)
      })
    })
  }
})
