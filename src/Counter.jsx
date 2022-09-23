import React, { useState } from "react";
import { useEffect } from "react";
import './Design.css';
import {connect} from 'react-redux';
import Addel from "./Addel";
function Counter(props){
    var [count,setcount]=React.useState(0);
    function counters(z){
       if(z==1)
       {
        props.dispatch({type:'INCREMENT'});
       }
    else
    {
        props.dispatch({type:'DECREMENT'});
    }
    }
    return(
        <div className="views">
            <div>Count {props.count}</div>
            <br/>
            <button onClick={()=>{counters(1)}}>Inc</button>
            <button onClick={()=>{counters(-1)}}>Dec</button>
      <Addel check={2}></Addel>
            
            </div>
    )
}
export default connect((store)=>{return store})(Counter);
      