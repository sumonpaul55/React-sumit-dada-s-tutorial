import React, { useReducer } from 'react';

const initialState =0;

const reducer = (state, action)=>{
    // eslint-disable-next-line no-self-assign
    (state <= 0) ?state= 1: state = state;
    switch(action){
        case 'increament':
            return state + 1;
        case 'decreaament':
            return state - 1;
        default:
            return state;
    }
}

const Usereducercounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div>
            <h2>Icreament & Decreament using useReducer</h2>
            <h3>Count : {count}</h3>
            <button type='button' onClick={()=> dispatch('increament')}>Increament</button>
            <button type='button' onClick={()=> dispatch('decreaament')}>Dncreament</button>
        </div>
    );
};

export default Usereducercounter;