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



// import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기
// import {
//   createPromiseThunk,
//   reducerUtils,
//   handleAsyncActions,
//   createPromiseThunkById,
//   handleAsyncActionsById
// } from '../lib/asyncUtils';

// /* 액션 타입 */

// // 포스트 여러개 조회하기
// const GET_POSTS = 'GET_POSTS'; // 요청 시작
// const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
// const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// // 포스트 하나 조회하기
// const GET_POST = 'GET_POST';
// const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
// const GET_POST_ERROR = 'GET_POST_ERROR';

// // 포스트 비우기
// // const CLEAR_POST = 'CLEAR_POST';


// // 아주 쉽게 thunk 함수를 만들 수 있게 되었습니다.
// export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
// export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById);

// // export const clearPost = () => ({ type: CLEAR_POST});


// // initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
// // const initialState = {
// //   posts: reducerUtils.initial(),
// //   post: reducerUtils.initial()
// // };

// // initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
// const initialState = {
//   posts: reducerUtils.initial(),
//   post: reducerUtils.initial()
// };

// export default function posts(state = initialState, action) {
//   switch (action.type) {
//     case GET_POSTS:
//     case GET_POSTS_SUCCESS:
//     case GET_POSTS_ERROR:
//       return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
//     case GET_POST:
//     case GET_POST_SUCCESS:
//     case GET_POST_ERROR:
//       return handleAsyncActionsById(GET_POST, 'post', true)(state, action);
//     default:
//       return state;
//   }
// }

// // export const goToHome = () => (dispatch, getState, { history }) => {
// //   history.push('/');
// // };

// export const goToHome = (navigate) => (dispatch, getState) => {
//   navigate("/");
// }



// import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기
// import {
//   reducerUtils,
//   handleAsyncActions,
//   handleAsyncActionsById
// } from '../lib/asyncUtils';
// import { call, put, takeEvery } from 'redux-saga/effects';

// /* 액션 타입 */

// // 포스트 여러개 조회하기
// const GET_POSTS = 'GET_POSTS'; // 요청 시작
// const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
// const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// // 포스트 하나 조회하기
// const GET_POST = 'GET_POST';
// const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
// const GET_POST_ERROR = 'GET_POST_ERROR';

// export const getPosts = () => ({ type: GET_POSTS });
// // payload는 파라미터 용도, meta는 리듀서에서 id를 알기위한 용도
// export const getPost = id => ({ type: GET_POST, payload: id, meta: id });

// function* getPostsSaga() {
//   try {
//     const posts = yield call(postsAPI.getPosts); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
//     yield put({
//       type: GET_POSTS_SUCCESS,
//       payload: posts
//     }); // 성공 액션 디스패치
//   } catch (e) {
//     yield put({
//       type: GET_POSTS_ERROR,
//       error: true,
//       payload: e
//     }); // 실패 액션 디스패치
//   }
// }

// // 액션이 지니고 있는 값을 조회하고 싶다면 action을 파라미터로 받아와서 사용 할 수 있습니다.
// function* getPostSaga(action) {
//   const param = action.payload;
//   const id = action.meta;
//   try {
//     const post = yield call(postsAPI.getPostById, param); // API 함수에 넣어주고 싶은 인자는 call 함수의 두번째 인자부터 순서대로 넣어주면 됩니다.
//     yield put({
//       type: GET_POST_SUCCESS,
//       payload: post,
//       meta: id
//     });
//   } catch (e) {
//     yield put({
//       type: GET_POST_ERROR,
//       error: true,
//       payload: e,
//       meta: id
//     });
//   }
// }

// // 사가들을 합치기
// export function* postsSaga() {
//   yield takeEvery(GET_POSTS, getPostsSaga);
//   yield takeEvery(GET_POST, getPostSaga);
// }

// // 3번째 인자를 사용하면 withExtraArgument 에서 넣어준 값들을 사용 할 수 있습니다.
// // export const goToHome = () => (dispatch, getState, { history }) => {
// //   history.push('/');
// // };

// export const goToHome = (navigate) => (dispatch, getState) => {
//   navigate("/");
// }


// // initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
// const initialState = {
//   posts: reducerUtils.initial(),
//   post: reducerUtils.initial()
// };

// export default function posts(state = initialState, action) {
//   switch (action.type) {
//     case GET_POSTS:
//     case GET_POSTS_SUCCESS:
//     case GET_POSTS_ERROR:
//       return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
//     case GET_POST:
//     case GET_POST_SUCCESS:
//     case GET_POST_ERROR:
//       return handleAsyncActionsById(GET_POST, 'post', true)(state, action);
//     default:
//       return state;
//   }
// }



import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기
import {
  reducerUtils,
  handleAsyncActions,
  handleAsyncActionsById,
  createPromiseSaga,
  createPromiseSagaById
} from '../lib/asyncUtils';
import { takeEvery , getContext } from 'redux-saga/effects';

/* 액션 타입 */

// 포스트 여러개 조회하기
const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';
// const GO_TO_HOME = 'GO_TO_HOME';

export const getPosts = () => ({ type: GET_POSTS });
export const getPost = id => ({ type: GET_POST, payload: id, meta: id });
// export const goToHome = () => ({ type: GO_TO_HOME })


const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById);
// function* goToHomeSaga(navigate) {
//   const history = yield getContext('history');
//   navigate("/");
// }

export const goToHome = (navigate) => (dispatch, getState) => {
  navigate("/");
}

// 사가들을 합치기
export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
//     yield takeEvery(GO_TO_HOME, goToHomeSaga);
// }
}

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