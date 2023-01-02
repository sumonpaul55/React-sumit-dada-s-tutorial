import React, { useState } from 'react';
import Mybutton from './Mybutton';
import Showcount from './Showcount';
import Title from './Title';

const Main = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increamentByone = () => {
        setCount1((prevcoutn)=> prevcoutn+1)
    }
    const increamentByFive = () => {
        setCount2((prevcoutn)=> prevcoutn + 5)
    }
    return ( 
        <div>
            <Title/>

           
           <Showcount count={count1} title='counte by 1' />
           <Mybutton handleclick={increamentByone}>Increment by one </Mybutton>
            <hr />
           <Showcount count={count2}  title='count by 5'/>
           <Mybutton handleclick={increamentByFive}>Increment by five</Mybutton>
           
            
        </div>
    );
};

export default Main;