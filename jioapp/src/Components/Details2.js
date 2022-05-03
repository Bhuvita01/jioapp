import React from "react";
import { Link } from "react-router-dom";

export default function Details2() {
    return (
        <div className="some">
            <h1><strong>Few more Details</strong></h1>
            <br />
            <form class="form-floating">
            <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com"  />
            <label for="floatingInputValue">Enter your Aadhaar number</label>
            </form>
            <br />
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" />
            <label class="form-check-label" for="inlineCheckbox1">POA same as adhaar number</label>
            </div>
            <br />
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" />
             <label class="form-check-label" for="inlineCheckbox2">POI same as PAN number</label>
            </div>
            <br />
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" />
             <label class="form-check-label" for="inlineCheckbox2">Are you a GST registered?</label>
            </div>
            <br />
            <form class="form-floating">
            <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com"  />
            <label for="floatingInputValue">Firm Name</label>
            </form>
            <br />
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" />
             <label class="form-check-label" for="inlineCheckbox2">Are you an  existing customer?</label>
            </div><br />
            <p>Note : If you have any valid PRM id with Jio,please provide the number.</p><br />
            <button type="button" id="Nextbutton" class="btn btn-primary btn-lg">
           <Link to="/location" style={{ textDecoration: "none", color: "White" }}>
               Continue
            </Link>
            </button>
            </div>
    )
}














