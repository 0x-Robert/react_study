import React from 'react';
//import {withRouter} from 'react-router-dom'; v6에서는 현재 안 쓰는 것 같음
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const WithRouterSample = () => {
    const params = useParams(); //url에 대한 정보 
    const location = useLocation(); //현재 페이지에 대한 정보 
    const navigate = useNavigate(); 

    return (
        <div>
             <h4>params </h4>
            <textarea value={JSON.stringify(params)} readOnly/>
            <h4>location </h4>
            <textarea value={JSON.stringify(location, null, 2)} readOnly/>
            <h4>navigate</h4>
            <button onClick={()=> navigate(-1)}>홈으로</button>
        </div>
    )
}

export default WithRouterSample;


// history 객체는 라우트로 사용된 컴포넌트에게 match, location 과 함께 전달되는 props 중 하나
// 컴포넌트 내에 구현하는 메소드에서 라우터에 직접 접근 (뒤로가기, 특정 경로로 이동, 이탈 방지)

// withRouter HoC 는 라우트 컴포넌트가 아닌곳에서 match / location / history 를 사용

// Switch 는 여러 Route 들을 감싸서 그 중 규칙이 일치하는 라우트 단 하나만을 렌더링
// (Not Found 페이지를 구현가능)

// NavLink 는 Link 랑 비슷한데, 만약 현재 경로와 Link 에서 사용하는 경로가 일치하는 경우 특정 스타일 혹은 클래스를 적용 할 수 있는 컴포넌트
