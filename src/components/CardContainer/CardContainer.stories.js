import React from 'react';
import {PrimaryCard} from '../Card/Card.stories';
import StyleStage from './Style-Stage.png';

export default {
    title: 'My Work/CardContainer'
}

export const PrimaryCardContainer = () => (
    <div className="grid lg:grid-cols-2 gap-10 sm:m-5">
        <PrimaryCard title = 'Style Stage' image={StyleStage}>regfref ewfeu</PrimaryCard>
        <PrimaryCard title = 'Movies browser'>regfref Movies browser</PrimaryCard>
        <PrimaryCard title = 'Sahyadri'>regfref Sahyadri</PrimaryCard>
        <PrimaryCard title = 'Note taker'>regfref Note taker</PrimaryCard>
    </div>
)