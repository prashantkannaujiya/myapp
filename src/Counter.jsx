import React, { useState } from "react";
import { useEffect } from "react";
import './Design.css';
import Addel from "./Addel";
function Counter(){
    var [count,setcount]=React.useState(0);
    function counters(z){
        console.log(z);
        setcount(count+z);
    }
    return(
        <div className="views">
            <div>Count {count}</div>
            <br/>
            <button onClick={()=>{counters(1)}}>Inc</button>
            <button onClick={()=>{counters(-1)}}>Dec</button>
      <Addel check={2}></Addel>
            
            </div>
    )
}
export default Counter;
      