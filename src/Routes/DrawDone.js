import React from 'react';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function DrawDone() {

    let navigate = useNavigate(); //Navigate 함수 호출

    return (
        <div className='DrawDone pt-5'>
            <div className="container pt-5">
                <div className='row pt-5'>
                    <h1 className='pt-5'>응모 완료!</h1>
                    <p>※응모탈락은 별도의 알림이 가지 않습니다.</p>
                </div>
                <div className='pt-5'>
                    <Button
                        variant="dark"
                        onClick={() => {
                            navigate("/");
                        }}>나가기</Button>
                </div>
            </div>
        </div>
    )
}

export default DrawDone;