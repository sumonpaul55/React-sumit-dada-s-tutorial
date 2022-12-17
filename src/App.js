import React from 'react';
import ClockList from './Components/ClockList/ClockList';


const App = () =>{

  const quantity = [1,2,3 ,4,5,6,7,8,9,10,5,3 ,2,4,2,4,3,3,3,3];

  
  return(
    <div className='clockitems'>
      <ClockList quantity={quantity}/>
    </div>
  )
}

export default App;