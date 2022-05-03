// import React from 'react';
// import{Link} from "react-router-dom";

// function Details() {
//     return (
//         <div className="App">
//             <h1>This is the Details page</h1>
//             <button>
//         <Link to="/" style={{ textDecoration: "none", color: "black" }}>
//           This is page 2
//         </Link>
//       </button>
//         </div>
//     )
// }

// export default Details;


import React from "react";
import{Link} from "react-router-dom";

class Details extends React.Component{
    render(){
        return(
            <div className="ui main">
                <h1><strong>Personal details</strong></h1>
            <form className="ui form">
                <div className="field">
                      <h4>Mr/Mrs</h4> 
                    <input type="text" name="Mr/Mrs" placeholder="Mr/Mrs" /> 
                     <h4>Full Name</h4> 
                    
                    <input type="text"  name="name" placeholder="Full Name" />
                    <h4>Pan card number</h4> 
                    <input type="text" name="Please enter your pan number" placeholder="Please enter your pan number" />
                    
                    <div className="dropdown">
                    <select>
                    <option value="individual">Individual</option>
                    <option value="group">Group</option>
                    </select>
                    </div>
                    </div>
                    {/* <div className="click">Dont have an account yet?<br/><Link to={"/header"}>Click Here</Link></div> */}
                    {/* <button class="btn btn-primary" type="submit">Next</button> */}
            </form>
            <button type="button" id="Nextbutton" class="btn btn-primary btn-lg">
           <Link to="/details2" style={{ textDecoration: "none", color: "White" }}>
               Next
            </Link>
            </button>
            
        </div>
        );
    }
}
export default Details; 
