import React, { useState } from 'react';

const Counterincrease = () => {

    const [count, setCount] = useState(0)

const clickHandler  = ()=>{
    setCount((prev)=>{
      return  prev + 1
    })
}
    const addfive = ()=>{
        let i = 0;
        while(i<5){
            setCount((prev)=>{
              return prev +1;
            })
            i++;
        }
    }


    return (
        <div>
            <button type='button' onClick={clickHandler}>click {count}</button>
        <br />
            <button style={{marginTop: '20px'}} type='button' onClick={addfive}> Click here {count}</button>
        </div>
    );
};

export default Counterincrease;