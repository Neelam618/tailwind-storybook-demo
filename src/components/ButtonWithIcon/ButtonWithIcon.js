import React from 'react';
import "../../index.css";
import DefaultIcon from './click.svg';

function Button(props) {
    const {variant = 'Primary', children = 'Default', icon, ...rest} = props
    return (
        <button className={`bg-pink-600 hover:bg-pink-700 font-medium px-6 py-2 rounded-md text-white ${variant}`} {...rest}>
            <img className='inline mr-2 h-6' src={icon || DefaultIcon} />
            {children}
        </button>
    )
}

export default Button;