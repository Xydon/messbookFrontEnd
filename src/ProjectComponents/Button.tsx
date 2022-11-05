import React from 'react'

function ButtonMedium({label} : {label : string}) {
  return (
    <div className="button_size_m bg_black round-8 label_white pl-3 pr-3">
      <p className="cc_16">{label}</p>
    </div>
  ); 
}

export default ButtonMedium