import React from 'react';

const Calculator = ({selcius}) => {
    if(selcius >= 100){
        return (
            <h2>The Water will boil</h2>
        );
    }else{
        return (
            <h2>The Water will not boil</h2>
        );
    }
};

export default Calculator;