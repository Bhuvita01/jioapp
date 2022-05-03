import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import Details from "./Components/Details";
import Details2 from "./Components/Details2";
import Page from "./Components/Page";
import Terms from "./Components/Terms";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />}/>
      <Route path="/header" element={<Header />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/page" element={<Page />} />

      <Route path="/details" element={<Details />} />
      <Route path="/details2" element={<Details2 />} /> 
    </Routes>
  </Router>
  // document.getElementById("root")
);




// render(
//   <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<App />} />
//     <Route path="login" elements={<Login />} />
//     </Routes>
//     </BrowserRouter>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <Routes>
//       <Route exact path="/">
//         <App />
//       </Route>

//       <Route path="/details">
//         <Details />
//       </Route>

//       <Route path="/header">
//         <Header />
//       </Route>
//     </Routes>
//   </Router>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
