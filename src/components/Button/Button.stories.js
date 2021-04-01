import React from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    variant: 'shadow-lg'
}
export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'shadow-inner',
    color: 'text-pink-600'
}

