import React from 'react';
import "../../index.css";
import {PrimaryBtn} from '../ButtonWithIcon/ButtonWithIcon.stories';
import DefaultImage from './brain2pocket.png';
import Website from './go.svg';
import Github from './github.svg';


function Card(props) {
    const {variant, children = 'Built a static website for a small consulting business to improve its web presence', title = 'Brain 2 Pocket', image} = props
    return (
        <div className="bg-gray-200 p-3 md:p-10 shadow-lg rounded-md text-xs">
            <h2 className="text-center text-lg md:text-2xl font-semibold my-2 md:my-5">{title}</h2>
            <div className="shadow-lg rounded-md p-2 md:p-8">
                <div className="shadow-lg p-2 md:p-3 rounded-md overflow-hidden">
                    <img src={image || DefaultImage} className="w-full mx-auto" alt={title} />
                </div>
                <div className="my-3 md:my-6">{children}</div>
            </div>
            <div className="text-center mt-2 md:mt-10">
                <PrimaryBtn icon={Website} variant ='mr-0 xs:mr-4'>Launch Website</PrimaryBtn>
                <PrimaryBtn icon={Github} variant ='mt-0'>View Code</PrimaryBtn>
            </div>
        </div>
    )
}

export default Card;