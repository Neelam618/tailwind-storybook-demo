import React from 'react';
import {PrimaryCard} from '../Card/Card.stories';
import StyleStage from './Style-Stage.png';

export default {
    title: 'My Work/CardContainer'
}

export const PrimaryCardContainer = () => (
    <div className="grid grid-flow-col lg:grid-cols-2 gap-10 grid-rows-2 lg:grid-rows-1 m-5">
        <PrimaryCard title = 'Style Stage' image={StyleStage}>regfref ewfeu</PrimaryCard>
        <PrimaryCard title = 'Movies browser'>regfref Movies browser</PrimaryCard>

    </div>
)