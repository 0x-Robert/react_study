// yarn add redux-logger
// yarn add redux-devtools-extension

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from 'redux';
//import myLogger from './middlewaress/myLogger';
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'; 

//프로젝트에 리덕스를 적용할 때 index.js에서 루트리듀서를 불러와서 새로운 스토어를 만들고
//provider를 사용해서 프로젝트에 적용함

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);


//const store = createStore(rootReducer,applyMiddleware( logger));
//여러개의 미들웨어를 적용할 수 있습니다. 


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
