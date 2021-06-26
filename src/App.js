import React from 'react';
import styles from "./App.css";
import Leftbar from "./sides/leftbar/leftbar.js";
import Rightbar from "./sides/rightbar/rightbar.js";
import Main from "./sides/main/main.js";



const App = () => {
  return (
    <div>
     <div className="app">
        <Leftbar/>
        <Main/>
        <Rightbar/> 
    </div>
    </div>
  );
}



export default App;