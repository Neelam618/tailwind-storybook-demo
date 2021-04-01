import React from 'react';
import "../../index.css";

function Button(props) {
    const {variant, children = 'Default', color, ...rest} = props
    return (
        <button className={`bg-gray-100 font-medium px-5 py-2 rounded-full ${variant} ${color}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;