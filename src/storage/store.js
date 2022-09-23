import counterReducer from "./counterReducer";
import {createStore} from "redux";
//var counter=counterReducer;
var mainstore= new createStore(counterReducer);
export default mainstore;