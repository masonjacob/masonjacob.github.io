import React, { useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'


const Test = (props) => {
    const [state, setState] = useState("Click the Button");

    return (
        <div>
        <div><h1>{state}</h1></div>
        <button onClick={setState("Cool")}></button>
        </div>
        
    )
}

export default Test;