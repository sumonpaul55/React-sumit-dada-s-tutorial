import React, { useReducer } from 'react';

const initialState ={
    counter : 0,
};

const reducer = (state, action)=>{
    // eslint-disable-next-line no-self-assign
  
    switch(action.type){
        case 'increament':
            return {counter: state.counter + action.value};
        case 'decreaament':
            return {counter: state.counter - action.value};
        default:
            return {counter: state.counter,};
    }
}

const ComplexCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div>
            <h2>Icreament & Decreament using useReducer</h2>
            <h3>Count : {count.counter}</h3>
            <button type='button' onClick={()=> dispatch({type: 'increament', value: 1})}>Increament by 1</button>
            <button type='button' onClick={()=> dispatch({type: 'decreaament', value: 1})}>Dncreament by 1</button>
            <button type='button' onClick={()=> dispatch({type: 'increament', value: 5})}>Increament by 5</button>
            <button type='button' onClick={()=> dispatch({type: 'decreaament', value: 5})}>Dncreament by 5</button>
        </div>
    );
};

export default ComplexCounter;