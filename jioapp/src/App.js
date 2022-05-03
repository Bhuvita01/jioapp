import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

const App = () =>{
  return (
    <div className="App">
      <h1><strong>Welcome to Jio POSLite</strong></h1>
      <br />
      <button type="button" id="Loginbtn" className="btn btn-primary btn-lg">
           <Link to="/header" style={{ textDecoration: "none", color: "White" }}>
               Login
            </Link>
            </button>
      <br />
      <br />
      <button type="button" id="Loginbtn" class="btn btn-primary btn-lg">
           <Link to="/page" style={{ textDecoration: "none", color: "White" }}>
               Register
            </Link>
            </button>
    </div>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <br/>
//      <Details />
//     </div>
//      );
//     };
  
 

// export default App;

