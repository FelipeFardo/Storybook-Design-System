import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@fardo-ignite-ui/react'

export default {
  title: 'Surfaces/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/felipefardo.png',
    alt: 'Felipe Fardo',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
