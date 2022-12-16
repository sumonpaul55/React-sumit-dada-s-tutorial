import React from 'react';

class Button extends React.Component{
    shouldComponentUpdate(nextProps){
        const {change: currentChange , locale: currentLocale} = this.props;
        const {change: nextChange, locale: nextLoclae} = nextProps;
        if(currentChange === nextChange && currentLocale === nextLoclae){
            return false;
        }
        else{
            return true;
        }
    }
   
    render(){
        const {change, locale} = this.props;
        return (
        <button type='button' onClick={()=> change(locale)} style={{display: 'inline-block', color: 'black',background: 'cyan', padding:'5px 10px'}}>Click here</button>
        )
    }
}
export default Button;

