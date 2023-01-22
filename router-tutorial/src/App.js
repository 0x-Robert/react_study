import React from 'react';
import {Route, Routes, Link  } from 'react-router-dom';
import About from "./About"
import Home from "./Home";
//import Profile from "./Profile"
import Profiles from './Profiles';



const App = ()=> {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
      </ul>
      <hr/>
      <Routes>
      <Route path="/" exact={true} element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profiles/*" element={<Profiles/>}/>
      </Routes>
    </div>
  )
}

export default App;


// // version 5
// import { Route } from 'react-router-dom';

// <div>
//       <Route path="/" exact={true} component={Home} />
// </div>
// // version 6
// import { Route, Routes } from "react-router-dom";

// <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
// </div>