/// <reference types="cypress" />

import { Attributable, AttributableMixin } from '../mixins/attributable'
import { Clickable, ClickableMixin } from '../mixins/clickable'
import { Containable, ContainableMixin } from '../mixins/containable'
import { Disableable, DisableableMixin } from '../mixins/disableable'
import { Existable, ExistableMixin } from '../mixins/existable'
import { Accessor, createAccessor, Mixin, MixinContext } from '../mixins/mixins'
import { NthSelectable, NthSelectableMixin } from '../mixins/nthSelectable'
import { Shouldable, ShouldableMixin } from '../mixins/shouldable'
import { Urlable, UrlableMixin } from '../mixins/urlable'
import { Visible, VisibleMixin } from '../mixins/visible'
import { Waitable, WaitableMixin } from '../mixins/waitable'

interface ButtonAccessorType
  extends Clickable<ButtonAccessorType>,
    Existable<ButtonAccessorType>,
    Shouldable<ButtonAccessorType>,
    Containable<ButtonAccessorType>,
    Disableable<ButtonAccessorType>,
    Visible<ButtonAccessorType>,
    NthSelectable<ButtonAccessorType>,
    Attributable<ButtonAccessorType>,
    Urlable<ButtonAccessorType>,
    Waitable<ButtonAccessorType> {}

export const ButtonContainableMixin: Mixin = <T>({ selector, creator }: MixinContext<T>) => ({
  /**
   * Check the content of the label element
   */
  contains: (content: string) => {
    cy.get(selector).contains(content)
    return creator()
  },
  /**
   * Asserts that button is disabled
   */
  assertIsDisabled: () => {
    cy.get(selector).should('be.disabled')
    return creator()
  },
})

/**
 * ButtonAccessor is a helper object for E-2-E testing.
 * It maps the button behaviour to the `bal-button` ui component.
 *
 * ```typescript
 * import { dataTestSelector, ButtonAccessor } from '@baloise/design-system-components-testing'
 *
 * describe('Button', () => {
 *   it('should ...', () => {
 *      const button = ButtonAccessor(dataTestSelector('button-id')).get()
 *      button.click()
 *      button.assertIsEnabled()
 *      button.contains('Label')
 *  })
 * })
 * ```
 */
export const ButtonAccessor: Accessor<ButtonAccessorType> = createAccessor<ButtonAccessorType>(
  ClickableMixin,
  ExistableMixin,
  ShouldableMixin,
  ContainableMixin,
  DisableableMixin,
  VisibleMixin,
  NthSelectableMixin,
  AttributableMixin,
  UrlableMixin,
  WaitableMixin,
  ButtonContainableMixin,
)
