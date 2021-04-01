import React from 'react';
import "../../index.css";
import {PrimaryBtn} from '../ButtonWithIcon/ButtonWithIcon.stories';
import DefaultImage from './brain2pocket.png';
import Website from './go.svg';
import Github from './github.svg';


function Card(props) {
    const {variant, children = 'Built a static website for a small consulting business to improve its web presence', title = 'Brain 2 Pocket', image} = props
    return (
        <div className="bg-gray-200 p-10 shadow-lg rounded-md">
            <h2 className="text-center text-2xl font-semibold my-5">{title}</h2>
            <div className="shadow-lg rounded-md p-8">
                <div className="shadow-lg p-4 rounded-md overflow-hidden">
                    <img src={image || DefaultImage} className="w-full mx-auto" alt={title} />
                </div>
                <div className="my-6">{children}</div>
            </div>
            <div className="text-center mt-10">
                <PrimaryBtn icon={Website} variant ='mr-4'>Launch Website</PrimaryBtn>
                <PrimaryBtn icon={Github}>View Code</PrimaryBtn>
            </div>
        </div>
    )
}

export default Card;