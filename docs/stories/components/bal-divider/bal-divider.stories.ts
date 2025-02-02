import type { JSX } from '@baloise/design-system-components'
import type { Meta } from '@storybook/html'
import { props, withRender, withContent, withDefaultContent, withComponentControls, StoryFactory } from '../../utils'

type Args = JSX.BalDivider & { content: string }

const meta: Meta<Args> = {
  title: 'Components/Layout/Divider',
  args: {
    ...withDefaultContent(''),
  },
  argTypes: {
    ...withContent(),
    ...withComponentControls({ tag: 'bal-divider' }),
  },
  ...withRender(({ content, ...args }) => `<bal-divider ${props(args)}>${content}</bal-divider>`),
}

export default meta

/**
 * STORIES
 * ------------------------------------------------------
 */

const Story = StoryFactory<Args>(meta)

export const Basic = Story()

export const LayoutVertical = Story({
  args: {
    layout: 'vertical',
    color: 'primary',
  },
  ...withRender(
    ({ ...args }) => `<bal-stack>
  <bal-text>Left</bal-text>
  <bal-divider ${props(args)}></bal-divider>
  <bal-text>Right</bal-text>
</bal-stack>`,
  ),
})
