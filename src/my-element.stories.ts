import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './counter.ts'

export default {
    title: 'My Element',
    parameters: {
        layout: 'centered',
    },
    render: (args) => html`<inv-counter count=${args.count} ?disabled=${args.disabled}>
        ${args.name}
    </inv-counter>`,
} as Meta

export const Default: StoryObj = {
    name: 'Default',
    args: {
        name: 'Lit',
        count: 1,
        disabled: false,
    },
}