import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
    const [todo, setTodo] = useState('')
    const [warning, setWarning] = useState(null)

    const handleTodo = (e)=>{
        let inputValue = e.target.value;
        const  updateWarning = inputValue.includes('.js')? `You need to learn more about javascript`: null;

        setTodo(inputValue);
        setWarning(updateWarning);

    }
    return (
        <div>
            <h1>{todo}</h1>
            <h2>{warning}</h2>
            <textarea name="todo" id="" cols="100" rows="2" value={todo} onChange={handleTodo}></textarea>
            
        </div>
    );
};

export default Todo;