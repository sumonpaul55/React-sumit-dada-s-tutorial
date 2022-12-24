import React from 'react';

const Withcounter = (OriginalComponent) => {
    class Newcomponent extends React.Component {
        state = {
            count: 0,
           }
        //    inCreaseTime = ()=>{
        //     this.setState((prevState) => ({
        //         count: prevState.count + 1,
        //     }))
        //    }
        inCreaseTime =()=>{
            this.setState(
                (prevvalue) => ({count: prevvalue.count + 1,})
            );
        }
        render(){
            const {count} = this.state;
            return <OriginalComponent count={count} inCreaseTime={this.inCreaseTime}/>
        } 
    };
    return Newcomponent;
};

export default Withcounter;