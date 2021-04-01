import React from 'react';
import "../../index.css";
import {PrimaryBtn} from '../ButtonWithIcon/ButtonWithIcon.stories';
import DefaultImage from './brain2pocket.png';

function Card(props) {
    const {variant, children = 'Built a static website for a small consulting business to improve its web presence', title = 'Brain 2 Pocket', image} = props
    return (
        <div className="bg-gray-200 w-5/12 p-10 shadow-lg rounded-md m-8">
            <h2 className="text-center text-2xl font-semibold my-5">{title}</h2>
            <div className="shadow-lg rounded-md p-8">
                <img src={DefaultImage || image} className="w-100 mx-auto" alt={title} />
                <div className="my-6">{children}</div>
            </div>
            <div className="text-center">
                <PrimaryBtn variant ='mr-4'/>
                <PrimaryBtn />
            </div>
        </div>
    )
}

export default Card;