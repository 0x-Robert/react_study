import React from "react";
import PostContainer from "../containers/PostContainer";
import { useParams } from "react-router-dom";

// function PostPage({match}){
//     const {id} = match.params; //URL 파라미터 조회하기

//     //URL 파라미터 값은 문자열이기 때문에 parseInt를 사용하여 숫자로 변환해주어야함
//     return <PostContainer postId={parseInt(id, 10)}/>;

// }


function  PostPage(){
    // const {id} = match.params; //URL 파라미터 조회하기
    const params = useParams();

    //URL 파라미터 값은 문자열이기 때문에 parseInt를 사용하여 숫자로 변환해주어야함
    return <PostContainer postId={parseInt(params.id, 10)}/>;

}

export default PostPage;
