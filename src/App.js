import React from 'react';
import '../src/App.css';
import CheckTemparature from './Components/Checktemparature/Checktemparature';
import ClockList from './Components/ClockList/ClockList';
import ClickCounter from './Components/Composition/ClickCounter/ClickCounter';
import MouseOver from './Components/Composition/ClickCounter/MouseOver';
import Emoji from './Components/Composition/Emoji';
import Text from './Components/Composition/Text';
import Form from './Components/Form/Form';
const App = () =>{

  const quantity = [1,2,3 ,4,5,6,7,8,9,10];

  
  return(
    <div className='main-hero'>
      <div className='clockitems'>
      <ClockList quantity={quantity}/>
      </div>
      <div>
      <h2 style={{textAlign: 'center'}}>Form's default behaviur will not work for React</h2>
          <Form/>
      </div>
      <div className='temparatureinput-main'>
        <h1>Aplicaiton for check the water temperature</h1>
        <CheckTemparature/> 
      </div>
      <Emoji>
        {({addEmoji})=>  <Text addEmoji={addEmoji}/>}  
      </Emoji>
      <div className="click-couter">
        <ClickCounter/>
        <br />
        <MouseOver />
        <h6>Mouseover count Using heigher order component name is withcounter</h6>

      </div>
    </div>
  )
}

export default App;