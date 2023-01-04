import React, { useReducer } from 'react';

const initialState ={
    counter : 0,
};

const reducer = (state, action)=>{
    // eslint-disable-next-line no-self-assign
  
    switch(action.type){
        case 'increament':
            return {counter: state.counter + 1};
        case 'decreaament':
            return {counter: state.counter - 1};
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
            <button type='button' onClick={()=> dispatch({type: 'increament'})}>Increament</button>
            <button type='button' onClick={()=> dispatch({type: 'decreaament'})}>Dncreament</button>
        </div>
    );
};

export default ComplexCounter;