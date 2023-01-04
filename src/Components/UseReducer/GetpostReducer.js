import React, { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    error: '',
    post : {},
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'SUCCESS':
            return {
                loading: false,
                post: action.data,
                error: ''
            }      
        case 'ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong!'
            };
        default:
            return state;

    }
}
const GetpostReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
           .then(res => res.json())
           .then((data) => {
               dispatch({type: 'SUCCESS', data: data});
           })
           .catch(()=>{
            dispatch({type: 'ERROR'});
           });
    }, []);

    return (
        <div style={{backgroundColor: 'gray', padding: '20px'}}>
            <h2>Get post from jsonpalceholder Api Using Reducer instead of useState</h2>
            <h1>
                {state.loading ? 'data is loading...' : state.post.title}
                {state.error || null}
                
            </h1>
        </div>
    );
};

export default GetpostReducer;