import React, { useState } from "react";
import { useEffect } from "react";
import Counter from "./Counter";
import {Link,Outlet} from "react-router-dom";
import {Provider} from 'react-redux';
import './Design.css';
import ToDo from "./ToDo";
import mainstore from "./storage/store";
function App() {
 var [count,setcount] = useState(0);
  //var count=0;
  var timer;
  function Close(){
React.useEffect(()=>{
  
  var timer1=setInterval(()=>{
   setcount((count) => count + 1);
  
  },1000); 
 
 
  
  //console.log(x);
 

});
return(<h1>{count}</h1>)
  }
  return (
   <Provider store={mainstore}>
    <div className="view">
      <h1>{Close()} </h1>
      <h1><button onClick={clearInterval(timer)}></button></h1>
    <h1> <Link to="/counter">Counter</Link>
    
<Outlet />
</h1>

        </div>
       </Provider>
  );
}

export default App;
