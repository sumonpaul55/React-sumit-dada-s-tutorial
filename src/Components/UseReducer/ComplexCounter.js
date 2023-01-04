import React, { useReducer } from 'react';

const initialState ={
    counter : 0,
    counter2: 0,
};

const reducer = (state, action)=>{
    // eslint-disable-next-line no-self-assign
  
    switch(action.type){
        case 'increament':
            return {...state,counter: state.counter + action.value};
        case 'decreaament':
            return {...state, counter: state.counter - action.value}; 
        case 'increament2':
            return {...state,counter2: state.counter2 + action.value};  
        case 'decreaament2':
            return {...state,counter2: state.counter2 - action.value};  
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
            <br /><br />  
            <h2>Another work using same useReduce </h2>
            <h3>Count : {count.counter2}</h3>  
            <button type='button' onClick={()=> dispatch({type: 'increament2', value: 2})}>Dncreament by 2 in counter2</button>
            <button type='button' onClick={()=> dispatch({type: 'decreaament2', value: 2})}>Dncreament by 2 in counter2</button>
            
        </div>
    );
};

export default ComplexCounter;