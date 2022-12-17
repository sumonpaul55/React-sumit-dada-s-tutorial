import React from 'react';
import './Button.css';

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
        const {change, locale , show , enable} = this.props;
        if(!enable) return;
        return(
       <>
         <button type='button' onClick={()=> change(locale)}>
            {
                locale === 'en-US' ? 'Switch to English': 'Switch to Bangla'
            }
        </button>
        {
            show ?? <p>this is Bangladesh's local time</p>
           
        }
       </>
        )
    }
}
export default Button;

