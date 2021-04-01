import React from 'react';
import {PrimaryCard} from '../Card/Card.stories';

export default {
    title: 'My Work/CardContainer',
}

export const PrimaryCardContainer = () => (
    <div className="grid grid-flow-col grid-cols-2 gap-10 m-5">
        <PrimaryCard title = 'Style Stage'>regfref ewfeu</PrimaryCard>
        <PrimaryCard title = 'Movies browser'>regfref Movies browser</PrimaryCard>

    </div>
)