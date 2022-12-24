import React from "react";
export default class ClickCounter extends React.Component {
  
   state = {
    count: 0,
   }
   inCreaseTime = ()=>{
    this.setState((prevState) => ({
        count: prevState.count + 1,
    }))
   }
   
    // eslint-disable-next-line react/require-render-return
    render() {
        const { count } =this.state;
    return (
        <button type="button" onClick={this.inCreaseTime}>Clicked {(count > 0)? count : "X"} times</button>
    )
}
}
