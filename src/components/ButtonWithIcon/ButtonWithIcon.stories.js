import React from 'react';
import ButtonWithIcon from './ButtonWithIcon';

export default {
    title: 'My Work/ButtonWithIcon',
    component: ButtonWithIcon,
}

export const PrimaryBtn = (props) => <ButtonWithIcon icon={props.icon} variant={props.variant}>{props.children}</ButtonWithIcon>
