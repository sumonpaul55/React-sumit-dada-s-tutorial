import React from 'react';

const Image = (props) => {
    const {Imgsrc, altText, width} = props;
    return (
        <img src={Imgsrc} alt={altText} width={width} />
    );
};

export default Image;