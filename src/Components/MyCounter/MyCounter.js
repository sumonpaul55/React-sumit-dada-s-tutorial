import React, { useEffect, useState } from 'react';

const MyCounter = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [time, setTime] = useState(new Date());
    // eslint-disable-next-line no-undef
    
    useEffect(()=> {
        document.title = `Clicked ${count} `;
    }, [count]) // this is defendancy array if we call it it's mean I tell him to call the function inside useeffect

     useEffect(() =>{
        console.log('ticking')
        setInterval(ticktick(), 1000);
     },[]);


    const  ticktick = () => {
    setTime(new Date())
    }

    const addClick = () =>{
        setCount((prev)=>{
            return prev + 1;
        })
    }   
    const changeinput = (e)=>{
        setText(e.target.value);
     }

    return (
        <div>
            <h1>Use of useEffect hooks</h1>
            <b>{time.toLocaleTimeString()}</b><br />
            <br />
            <button type='button' onClick={addClick}>add Click </button>
            <input type="text" value={text} onChange={changeinput}/>
        </div>
    );
};

export default MyCounter;