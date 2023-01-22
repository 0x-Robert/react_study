import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//useEffect 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열
// deps를 넣기, deps를 만약 비우면 컴포넌트가 처음 나타날때만 useEffect에 등록한 함수가 호출됨

//리액트5와 6은 다름
function HistorySample(){

    const navigate = useNavigate();
    
    const goBack = () => {
       const confirm = window.confirm("정말 떠나시나요?")
       if(confirm){
        navigate(-1)
       }
    }

    const goHome =()=>{
       navigate("/")
    }

    // useEffect(()=> {
    //     console.log(history); 

    //     const unblock = history.block('정말 떠나시나요?')
    //     return () => {
    //         unblock();
    //     };

    // }, [history])


    return (

        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
        </div>
    )
}

export default HistorySample;

