// import * as postsAPI from "../api/posts";


// //액션타입


// //포스트 여러개 조회하기
// const GET_POSTS = 'GET_POSTS'; // 요청 시작
// const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; //요청 성공 
// const GET_POSTS_ERROR = "GET_POSTS_ERROR" //요청 실패


// //포스트 하나 조회하기
// const GET_POST = 'GET_POST';
// const GET_POST_SUCCESS = "GET_POST_SUCCESS";
// const GET_POST_ERROR = "GET_POST_ERROR";

// //thunk를 사용할 때 꼭 모든 액션들에 대해서 액션 생성함수를 만들 필요는 없습니다.
// // 그냥 thunk 함수에서 바로 액션 객체를 만들어주어도 괜찮습니다.

// export const getPosts = () => async dispatch => {
//     dispatch({type: GET_POSTS});
//     try{
//         const posts = await postsAPI.getPosts(); //api 호출
//         dispatch({type: GET_POSTS_SUCCESS, posts}) //성공 
//     }catch(e){
//         dispatch({type: GET_POSTS_ERROR, error:e}); //실패 
//     }
// };
//docker run --rm --tty --interactive --network host --volume /home/robertseo/.ironfish:/root/.ironfish ghcr.io/iron-fish/ironfish:latest
//docker run --rm --tty --interactive --network host --volume /user/sw/.ironfish:/root/.ironfish ghcr.io/iron-fish/ironfish:latest

// //thunk함수에서도 파라미터를 받아와서 사용할 수 있습니다. 
// export const getPost = id => async dispatch =>{
//     dispatch({type: GET_POST}) //요청이 시작됨
//     try{
//         const post = await postsAPI.getPostById(id) //api 호출 
//         dispatch({type: GET_POST_SUCCESS, post}) //성공 
//     }catch(e){
//         dispatch({type: GET_POST_ERROR, error:e})//실패 
//     }
// }


// const initialState = {
//     posts:{
//         loading: false,
//         data: null,
//         error:null 
//     },
//     post:{
//         loading: true,
//         data: null,
//         error:null 
//     }
// };


// export default function posts(state= initialState, action){
//     switch(action.type){
//         case GET_POSTS:
//             return{
//                 ...state, 
//                 posts:{
//                     loading: true,
//                     data:null,
//                     error:null 
//                 }
//             };
//             case GET_POSTS_SUCCESS:
//                 return {
//                     ...state, 
//                 posts:{
//                     loading:true,
//                     data:action.posts, 
//                     error:null 
//                 }
//                 };
//             case GET_POSTS_ERROR:
//                 return{
//                     ...state,
//                     posts:{
//                         loading:true,
//                         datA:null,
//                         error:action.error 
//                     }
//                 };
//             case GET_POST:
//                 return {
//                     ...state,
//                     post:{
//                         loading:true,
//                         data:null,
//                         error:null 
//                     }
//                 };
//             case GET_POST_SUCCESS:
//                 return{
//                     ...state,
//                     post:{
//                         loading:true,
//                         data:action.post ,
//                         error:null 

//                     }
//                 };
//             default:
//                 return state;
//     }
// }

// import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기
// import { createPromiseThunk, reducerUtils , handleAsyncActions } from '../lib/asyncUtils';

// /* 액션 타입 */

// // 포스트 여러개 조회하기
// const GET_POSTS = 'GET_POSTS'; // 요청 시작
// const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
// const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// // 포스트 하나 조회하기
// const GET_POST = 'GET_POST';
// const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
// const GET_POST_ERROR = 'GET_POST_ERROR';

// // 아주 쉽게 thunk 함수를 만들 수 있게 되었습니다.
// export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
// export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);

// // initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
// const initialState = {
//   posts: reducerUtils.initial(),
//   post: reducerUtils.initial()
// };

// export default function posts(state = initialState, action) {
//   switch (action.type) {
//     case GET_POSTS:
//       return {
//         ...state,
//         posts: reducerUtils.loading()
//       };
//     case GET_POSTS_SUCCESS:
//       return {
//         ...state,
//         posts: reducerUtils.success(action.payload) // action.posts -> action.payload 로 변경됐습니다.
//       };
//     case GET_POSTS_ERROR:
//       return {
//         ...state,
//         posts: reducerUtils.error(action.error)
//       };
//     case GET_POST:
//       return {
//         ...state,
//         post: reducerUtils.loading()
//       };
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         post: reducerUtils.success(action.payload) // action.post -> action.payload 로 변경됐습니다.
//       };
//     case GET_POST_ERROR:
//       return {
//         ...state,
//         post: reducerUtils.error(action.error)
//       };
//     default:
//       return state;
//   }
// }

// export default function posts(state = initialState, action) {
//     switch (action.type) {
//       case GET_POSTS:
//       case GET_POSTS_SUCCESS:
//       case GET_POSTS_ERROR:
//         return handleAsyncActions(GET_POSTS, 'posts')(state, action);
//       case GET_POST:
//       case GET_POST_SUCCESS:
//       case GET_POST_ERROR:
//         return handleAsyncActions(GET_POST, 'post')(state, action);
//       default:
//         return state;
//     }
//   }


// import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기
// import { createPromiseThunk, reducerUtils } from '../lib/asyncUtils';

// /* 액션 타입 */

// // 포스트 여러개 조회하기
// const GET_POSTS = 'GET_POSTS'; // 요청 시작
// const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
// const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// // 포스트 하나 조회하기
// const GET_POST = 'GET_POST';
// const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
// const GET_POST_ERROR = 'GET_POST_ERROR';

// // 아주 쉽게 thunk 함수를 만들 수 있게 되었습니다.
// export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
// export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);

// // initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
// const initialState = {
//   posts: reducerUtils.initial(),
//   post: reducerUtils.initial()
// };

// export default function posts(state = initialState, action) {
//   switch (action.type) {
//     case GET_POSTS:
//       return {
//         ...state,
//         posts: reducerUtils.loading()
//       };
//     case GET_POSTS_SUCCESS:
//       return {
//         ...state,
//         posts: reducerUtils.success(action.payload) // action.posts -> action.payload 로 변경됐습니다.
//       };
//     case GET_POSTS_ERROR:
//       return {
//         ...state,
//         posts: reducerUtils.error(action.error)
//       };
//     case GET_POST:
//       return {
//         ...state,
//         post: reducerUtils.loading()
//       };
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         post: reducerUtils.success(action.payload) // action.post -> action.payload 로 변경됐습니다.
//       };
//     case GET_POST_ERROR:
//       return {
//         ...state,
//         post: reducerUtils.error(action.error)
//       };
//     default:
//       return state;
//   }
// }



import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
  createPromiseThunkById,
  handleAsyncActionsById
} from '../lib/asyncUtils';

/* 액션 타입 */

// 포스트 여러개 조회하기
const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// 포스트 비우기
// const CLEAR_POST = 'CLEAR_POST';


// 아주 쉽게 thunk 함수를 만들 수 있게 되었습니다.
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById);

// export const clearPost = () => ({ type: CLEAR_POST});


// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
// const initialState = {
//   posts: reducerUtils.initial(),
//   post: reducerUtils.initial()
// };

// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial()
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActionsById(GET_POST, 'post', true)(state, action);
    default:
      return state;
  }
}