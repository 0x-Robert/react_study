import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Profile from "./Profile";
import WithRouterSample from './WithRouterSample';

const Profiles = () => {

    return(
        <div>
            <h3>유저 목록</h3>
            <ul>
                <li>
                    <Link to="/profiles/velopert">velopert</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong</Link>
                </li>
            </ul>


            {/* <Route
            path="/profiles"
            exact 
            render={()=> <div>유저를 선택해주세요~</div>}
            >
            </Route> */}

            {/* <Route path="/" element={
                유저를 선택해주세요 
            }/>
            <Route path=":username" element={}/> */}
            {/* <Route path="/profiles/:username" element={<Profile/>}/> */}


            <Routes>
                <Route path="/" element="유저를 선택해주세요"/>
                <Route path=':username' element={<Profile/>}/>
                
            </Routes>
            <WithRouterSample/>
        </div>
    )
}

export default Profiles;

