import React, { useState } from "react";
import { useEffect } from "react";

       var Addel=function(props){
            var [check,setcheck]=React.useState(null)
            function add(){
                
                var k=document.querySelector('#in').value;
setcheck(k);
            }
           return( <div>
            <input id="in" type="text"/>
<button onClick={add}>Enter</button>
            <li>{check}</li>
            <h1>{props.check}</h1>
        </div>)}
           
           export default Addel;
