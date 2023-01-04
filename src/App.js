import React, { createContext, useState } from 'react';
import '../src/App.css';
import CheckTemparature from './Components/Checktemparature/Checktemparature';
import ClockList from './Components/ClockList/ClockList';
import Emoji from './Components/Composition/Emoji';
import ClickClounter from './Components/Composition/EventCounter/ClickCounter';
import MouseOver from './Components/Composition/EventCounter/MouseOver';
import Text from './Components/Composition/Text';
import Context from './Components/Contexts/Context';
import Counter from './Components/Counter';
import Form from './Components/Form/Form';
import Formfunctional from './Components/FormFuntional/Formfunctional';
import MyCounter from './Components/MyCounter/MyCounter';
import Todo from './Components/Todo/Todo';
import Main from './Components/UseCallbackUsememo/Main';
import User from './Components/User/User';
import ComplexCounter from './Components/UseReducer/ComplexCounter';
import Getpost from './Components/UseReducer/GetPost/Getpost';
import GetpostReducer from './Components/UseReducer/GetpostReducer';
import Parentscompomonent from './Components/UseReducer/Parentscompomonent';
import Usereducercounter from './Components/UseReducer/Usereducercounter';

export const MyContext = createContext();
const App = () =>{
  const [show, setShow] = useState(true);
  const quantity = [1,2,3 ,4,5];  
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
        {({addEmoji})=><Text addEmoji={addEmoji}/>}
      </Emoji>
      <div className="click-couter">
        {/* <ClickCounter />
        <br />
        <MouseOver /> */}
        {/* <Counter render={(count, inCreaseTime)=> <ClickClounter count={count} inCreaseTime={inCreaseTime}/>}/>
        <Counter render={(count, inCreaseTime)=> <MouseOver count={count} inCreaseTime={inCreaseTime}/> }/> */}
        {/* <Counter>
           {(count, inCreaseTime)=> <MouseMoveCounter count={count} inCreaseTime={inCreaseTime}/>}
        </Counter> */}
        
        <Counter>
          {
            (count, inCreaseTime)=> <ClickClounter count={count} inCreaseTime={inCreaseTime}/>
          }
        </Counter>
        <Counter>
          {
            (count, inCreaseTime)=> <MouseOver count={count} inCreaseTime={inCreaseTime}/>
          }
        </Counter>
        <MyContext.Provider value={'Sumon chandra pual is Sent through context API'}>
          <Context />
        </MyContext.Provider>
        <h6>Mouseover count Using heigher order component name is withcounter</h6>
        <User name={(isloggedIn) =>isloggedIn ? 'Sumon paul': 'Guest'}/>
      </div>
      <div className='todo'>
          <Todo/>
      </div>
      <div className="mycounter">
        { show && <MyCounter/>}
        <br />
        <button onClick={()=> setShow((prevshow)=> !prevshow)} type='button'>
          {show ? 'Hide it': 'Show it'}
        </button>
      </div>

      <div className="callbackcallmenu">
        <Main/>
        <br />
        <Formfunctional/>
        <div>
          <h1>Use Reducer Counter</h1>
          <Usereducercounter />
          <hr />
          <ComplexCounter/>
        </div>
      </div>
      <div className="usereducercontextapi" style={{padding: '40px'}}>
        <Parentscompomonent />
        
        <Getpost/>
        
      <GetpostReducer/>
      </div>
    </div>
  )
}

export default App;