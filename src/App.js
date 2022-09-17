import React, { useState } from "react";
import { useEffect } from "react";
import Counter from "./Counter";
import {Link,Outlet} from "react-router-dom";
import './Design.css';
import ToDo from "./ToDo";
function App() {
 var [count,setcount] = useState(0);
  //var count=0;
  var timer;
  function Close(){
React.useEffect(()=>{
  
  var timer1=setInterval(()=>{
   setcount((count) => count + 1);
  
  },1000); 
 
 
  console.log(count);
  //console.log(x);
 
console.log('in use effect')
});
return(<h1>{count}</h1>)
  }
  return (
    <div className="view">
      <h1>{Close()} </h1>
      <h1><button onClick={clearInterval(timer)}></button></h1>
    <h1> <Link to="/counter">Counter</Link>
      
<Outlet />
      </h1>

        </div>
  );
}

export default App;
