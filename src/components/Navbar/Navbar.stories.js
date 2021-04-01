import React from 'react';
import {Primary} from '../Button/Button.stories';

export default {
    title: 'Navbar'
}

export const Navbar = () => (
    <div className='flex justify-end content-center'>
        <Primary>Home</Primary>
        <Primary>About</Primary>
        <Primary>My Work</Primary>
        <Primary>Resume</Primary>

    </div>
)