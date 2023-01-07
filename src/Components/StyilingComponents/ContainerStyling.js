import React from 'react';

const ContainerStyling = ({children}) => {
    return (
        <div className='wrapper'>
            {children}
        </div>
    );
};

export default ContainerStyling;