import React from 'react';
import Intro from "./Components/Intro"
import './App.css';
import All from "./Components/All"
function App() {
  return (
    <div className="universe">
      <div className="intro-div">
            <Intro /> 
       </div>
       <div className="rest-div">
      <All />
       </div>
    </div>
       

      // <Intro />
    
  );
}

export default App;
