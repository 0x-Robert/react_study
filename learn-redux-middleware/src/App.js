import PostListContainer from './containers/PostListContainer';
import React from "react";
import {Route, Routes } from "react-router-dom";
import PostPage from './pages/PostPage';
import PostListPage from "./pages/PostListPage";

function App() {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<PostListPage/>} />
    <Route path=":id" element={<PostPage/>}/>
    </Routes>
    </>
  )
}

export default App;
