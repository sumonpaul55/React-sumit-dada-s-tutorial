import React from 'react';

const ButtonStyled = (props) => {
    const {text} =  props;
    return (
        <button type='button'>{text}</button>
    );
};

export default ButtonStyled;