import React from "react";
export default class MouseOver extends React.Component {
   state = {
    count: 0,
   }
//    inCreaseTime = ()=>{
//     this.setState((prevState) => ({
//         count: prevState.count + 1,
//     }))
//    }
inCreaseTime =()=>{
    this.setState({
        count: this.state.count+1,
    });
}
   
    // eslint-disable-next-line react/require-render-return
    render() {
        const { count } =this.state;
    return (
        <button type="button" onMouseOver={this.inCreaseTime}>Mouse hovered {(count > 0)? count : "X"} times</button>
    )
}
}
