import React, { useState, useEffect } from "react";

const PopUpInfo = ({selectedTest, selectedMarker}) => {
    const [modelOpening, setModelOpening] = useState(false);

    const AddInformationFunction = () =>{
        if (modelOpening)setModelOpening(false)
        else setModelOpening(true);
    }


  return (
    <div>
    <button 
    onClick={AddInformationFunction}
    >
    {modelOpening ? <div>Close</div>: <div>Edit</div>}
    </button>
    {modelOpening ? <div>Model is Open</div>: null}
    </div>
  )
}

export default PopUpInfo