import React from 'react';

function Button(props){
const renderbutton=<button>{props.value}</button>

    return(
      <div>
        {renderbutton}
      </div>

    )

}




export default Button;