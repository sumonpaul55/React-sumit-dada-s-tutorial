import React from 'react';
import ClockList from './Components/ClockList/ClockList';


const App = () =>{

  const quantity = [1,2,3 ,4,5,6,7,8,9,10];

  
  return(
    <>
      <div className='clockitems'>
      <ClockList quantity={quantity}/>
    </div>
    <div>
      <h2 style={{textAlign: 'center'}}>this is form component</h2>
    </div>
    </>
  )
}

export default App;