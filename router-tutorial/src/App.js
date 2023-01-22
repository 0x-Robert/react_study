import React from 'react';
import { Route, Routes, Link  } from 'react-router-dom';
import About from "./About"
import Home from "./Home";
//import Profile from "./Profile"
import Profiles from './Profiles';
import HistorySample from './HistorySample';


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
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr/>

      <Routes>

      <Route path="/" exact={true} element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profiles/*" element={<Profiles/>}/>
      <Route path="/history" element={<HistorySample/>}/>
      <Route  
      render ={({location})=>(
        <div>
          <h2>페이지는 존재하지 않습니다.</h2>
          <p>{location.pathname}</p>
        </div>
      )}/>

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