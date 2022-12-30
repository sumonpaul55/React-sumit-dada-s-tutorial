import React, { useState } from 'react';
import Counterincrease from './Counterincrease';
import './Todo.css';

const Todo = () => {
    const [todo, setTodo] = useState('')
    const [warning, setWarning] = useState(null)

    const [objtest, setObjtext]=useState({
        title: '',
        description: '',
    })
    const handleTodo = (e)=>{
        let inputValue = e.target.value;
        const  updateWarning = inputValue.includes('.js')? `You need to learn more about javascript`: null;

        setTodo(inputValue);
        setWarning(updateWarning);
    }

    const {title, description} = objtest;
    return (
        <div>
           
            <div>
                <h1>{todo}</h1>
                <h2>{warning}</h2>
                <textarea name="todo" id="" cols="100" rows="2" value={todo} onChange={handleTodo}></textarea>
            </div>

            <div>
                <h2>UseState try with Object</h2>
                <h4>Title: {title}</h4>
                <input type="text" value={title} onChange={(e)=> setObjtext({...objtest, title: e.target.value})} />
                <h1>Description: {description}</h1>
                
                <textarea name="todo" id="" cols="100" rows="2" value={description} onChange={(e)=> setObjtext({...objtest,description: e.target.value})}></textarea>
                <Counterincrease />
            </div>
        </div>
    );
};

export default Todo;