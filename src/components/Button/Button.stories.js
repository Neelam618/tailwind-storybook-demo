import React from 'react';
import Button from './Button';

export default {
    title: 'Home/Button',
    component: Button,
}

export const Primary = (props) => <Button variant ='shadow-lg hover:shadow-inner mx-3' color='text-blue-800'>{props.children}</Button>
export const Secondary = () => <Button variant ='shadow-inner mx-3' color='text-pink-600' />

// const Template = args => <Button {...args} />

// export const Primary = Template.bind({})
// Primary.args = {
//     variant: 'shadow-lg hover:shadow-inner mx-3'
// }
// export const Secondary = Template.bind({})
// Secondary.args = {
//     variant: 'shadow-inner mx-3',
//     color: 'text-pink-600'
// }

