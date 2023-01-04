import React, { useReducer } from 'react';
import ComponentA from './ComponentA';

export const CounterContext = React.createContext();


const initialState = 0;
const reducer = (state, action)=>{
    switch(action){
        case 'increament':
            return state + 1;
        case 'decreament':
            return state - 1;
        default:
            return state;

    }
}

const Parentscompomonent = () => {
    

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>parents, Using useReducer and Context api</h1>
            <h2>Caunt Value is {count}</h2>

            <CounterContext.Provider value={{countdispatch: dispatch}}>
                <ComponentA />
            </CounterContext.Provider>
        </div>
    );
};

export default Parentscompomonent;