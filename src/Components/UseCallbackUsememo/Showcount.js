import React from 'react';

const Showcount = ({title, count}) => {
    console.log('showcount js rendered')
    return (
        <div>
            <h2>{title} is {count}</h2>
           
        </div>
    );
};

export default React.memo(Showcount);