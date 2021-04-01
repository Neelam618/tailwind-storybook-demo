import React from 'react';
import Card from './Card';

export default {
    title: 'Card',
    component: Card,
}

export const Primary = (props) => <Card image={props.image} title={props.title}>{props.children}</Card>
