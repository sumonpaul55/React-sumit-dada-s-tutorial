import React, { useCallback, useMemo, useState } from 'react';
import Mybutton from './Mybutton';
import Showcount from './Showcount';
import Title from './Title';

const Main = () => {
    console.log('main js rendered')
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increamentByone = useCallback(() => {
        setCount1((prevcoutn)=> prevcoutn+1)
    },[])
    const increamentByFive = useCallback(() => {
        setCount2((prevcoutn)=> prevcoutn + 5)
    },[])
    const isEvetOrod = useMemo(()=> {
        let i =0;
        while(i<500000000)i += 1 //costlty operaiton
        return count1 % 2 === 0;
    },[count1]);
    return ( 
        <div>
            <Title/>
            <Showcount count={count1} title='counte by 1' />
            <Mybutton handleclick={increamentByone}>Increment by one </Mybutton>

            <button style={{marginTop: '5px'}}>{(isEvetOrod) ? 'Even' : 'Odd'}</button>
            <hr />
            <Showcount count={count2}  title='count by 5'/>
            <Mybutton handleclick={increamentByFive}>Increment by five</Mybutton>
        </div>
    );
};

export default React.memo(Main);