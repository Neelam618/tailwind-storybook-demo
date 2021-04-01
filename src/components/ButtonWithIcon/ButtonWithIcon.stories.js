import React from 'react';
import ButtonWithIcon from './ButtonWithIcon';

export default {
    title: 'My Work/ButtonWithIcon',
    component: ButtonWithIcon,
}

export const Primary = (props) => <ButtonWithIcon icon={props.icon}>{props.children}</ButtonWithIcon>