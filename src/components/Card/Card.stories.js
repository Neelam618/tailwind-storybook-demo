import React from 'react';
import Card from './Card';

export default {
    title: 'My Work/Card',
    component: Card,
}

export const PrimaryCard = (props) => <Card image={props.image} title={props.title}>{props.children}</Card>
