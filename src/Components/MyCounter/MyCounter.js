import React, { useEffect, useState } from 'react';

const MyCounter = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    // eslint-disable-next-line no-undef
    
    useEffect(()=> {
        console.log('updating document title');
        document.title = `Clicked ${text} `;
    })

    const changeinput = (e)=>{
       setText(e.target.value);

    }

    const addClick = () =>{
        setCount((prev)=>{
            return prev + 1;
        })
    }

    return (
        <div>
            <h1>Use of useEffect hooks</h1>
            <button type='button' onClick={addClick}>add Click </button>
            <input type="text" value={text} onChange={changeinput}/>
        </div>
    );
};

export default MyCounter;