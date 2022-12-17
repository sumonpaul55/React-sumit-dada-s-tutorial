import React from 'react';
import ClockList from './Components/ClockList/ClockList';


const App = () =>{

  const quantity = [1,2,3,5,3,3,5,6,4,2,4,5,6,4,5]
  return(
    <div className='clockitems'>
      <ClockList quantity={quantity}/>
    </div>
  )
}

export default App;