import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="App">
    <h1>Welcome to Header Page</h1>
    <h2>Start editing to see some magic happen!</h2>
    
    <button>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        GoTo Home
      </Link>
    </button>
    
  </div>
  );
}

//  {/* const Header= () =>
//      return(
//         <div className="ui fixed menu">
//             <div className="ui container center">
//                 <h2>Personal details</h2>  
//                 <br/>
//             </div>
//         </div>
//      );

//  };
//  export default Header; */}

