import React from 'react'

export default function Alert(props) {
 
    const capitalized = (word)=> {
        word = word.toLowerCase();
        return word.charAt(0).toUpperCase() +word.slice(1);
    }
    return (
       (props.alert) ? 
        <div>
           <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalized(props.alert.type)}</strong>  :{props.alert.message}
           
            </div>
        </div>
       : <div></div>


    )
}
