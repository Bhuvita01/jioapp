import React from "react";
import { NavLink } from "react-router-dom";

export default function Page(){
    return(
        <div className="container">
            <form>
            <h1>Register to Jio Mart Digital</h1>
            <div className="ui divider"></div>
            <div className="ui form">
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="Email" placeholder="email" />
                    
                    <label>Phone number</label>
                    <input type="text" name="Phone number" placeholder="Phone number" />

                    <label>Shop</label>
                    <input type="text" name="Shop" placeholder="shop" />
                </div>
            </div>
            </form>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
           <label class="form-check-label" for="flexCheckDefault">
           <NavLink activeClassName ="active" to="/Terms">Terms and conditions</NavLink>
           </label>
        </div>
        <br />
        <button type="button" id="Nextbutton" class="btn btn-primary btn-lg">
               Send OTP
            </button>
        </div>
    )
}