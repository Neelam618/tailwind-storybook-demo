import React from 'react';
import "../../index.css";
import DefaultIcon from './click.svg';

function Button(props) {
    const {variant = 'PrimaryBtn', children = 'Default', icon, ...rest} = props
    return (
        <button className={`bg-pink-600 hover:bg-pink-700 font-medium px-4 md:px-6 py-1 md:py-2 my-3 md:my-4 rounded-md text-white ${variant}`} {...rest}>
            <img className='inline mr-2 h-4 md:h-6' src={icon || DefaultIcon} />
            {children}
        </button>
    )
}

export default Button;