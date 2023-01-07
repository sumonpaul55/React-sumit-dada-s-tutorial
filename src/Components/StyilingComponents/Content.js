import React from 'react';

const Content = ({children}) => {
    return (
        <div className='card-left'>
            {children}
        </div>
    );
};

export default Content;