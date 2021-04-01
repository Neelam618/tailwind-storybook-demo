import React from 'react';
import "../../index.css";

function Button(props) {
    const {variant = 'Home', children, ...rest} = props
    return (
        <button className={`bg-gray-100 font-bold px-5 py-2 rounded-full shadow-lg hover:shadow-inner ${variant}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;