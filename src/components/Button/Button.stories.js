import React from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
}

const Template = args => <Button {...args} />

export const Home = Template.bind({})
Home.args = {
    children: 'Home'
}
export const About = Template.bind({})
About.args = {
    children: 'About'
}
export const MyWork = Template.bind({})
MyWork.args = {
    children: 'My Work'
}
export const Resume = Template.bind({})
Resume.args = {
    children: 'Resume'
}

