import React from 'react';

function Input(props) {

    const renderMobileInput=<input type="number" placeholder="mobile" value={props.value} />
    const renderTextInput=<input type="text" placeholder="" value={props.value} />
    const renderPasswordInput=<input type="password" placeholder="password" value={props.value} />  
    
    return (
           <div>
                {(props.type=='text') && renderTextInput}
                {(props.type=='number') && renderMobileInput }
                {(props.type=='password') && renderPasswordInput}
           </div>
    )
}

export default Input;
