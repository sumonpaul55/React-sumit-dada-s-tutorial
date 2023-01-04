import React, { useContext } from 'react';
import { CounterContext } from '../UseReducer/Parentscompomonent';

const ComponentB = () => {

    const countContext = useContext(CounterContext);

    return (
        <div>
            <h2>ComponentB</h2>

           <button type='button' onClick={()=> countContext.countdispatch('increament')}>Increament</button>
           <button type='button' onClick={()=> countContext.countdispatch('decreament')}>Decreament</button>
        </div>
    );
};

export default ComponentB;