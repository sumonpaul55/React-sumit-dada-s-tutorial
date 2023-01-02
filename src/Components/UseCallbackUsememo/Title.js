import React from 'react';

const Title = () => {
    console.log('title rendered')
    return (
        <div>
            <h1>Callback and callmenu tutorial title</h1>
        </div>
    );
};

export default React.memo(Title);