import React, { useState } from "react";
import { useEffect } from "react";

  var ToDo = function () {
            var [st, setst] = React.useState(['ravi', 'vasu', 'jaya', 'om']);
            function add() {
                var k = document.querySelector('#input').value;
                setst([...st, k]);
            }
            function del(p) {
               var temp=[...st];
                temp.splice(p, 1);
                setst([...temp]);
            }

            return (
                <div className="reactclass">
                    <h1>Learning React</h1>
                    <br />
                    <input type="text" id="input" />
                    <button onClick={add}>Add students</button>
                    {
                        st.map(function (a, i) {
                            return (
                                <li>{a}
                                    <button onClick={function(){del(i)}}>Delete</button></li>
                            );
                        })
                    }
                </div>
            )
        }
        export default ToDo;
      