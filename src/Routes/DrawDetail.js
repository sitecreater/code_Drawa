import React from 'react';
import {Button} from 'react-bootstrap';
import {useLocation, useNavigate} from 'react-router-dom';

function DrawDetail() {

    const location = useLocation(); //Location 함수로 전송된 navigate props 값을 받을 수 있다.
    console.log('state', location.state);
    const {url, name, price, endDate} = location.state;
    let navigate = useNavigate(); //Navigate 함수 호출

    return (
        <div className="Draw pt-3">
            <div className="container pt-5">
                <div className="row pt-5">
                    <div className="col-md-6 pt-5">
                        <img src={url + '.jpg'} width="88%" alt=""/>
                    </div>
                    <div className="col-md-6 pt-2 my-auto">
                        <p className="pt-5">응모 예정</p>
                        <p>{endDate}</p>
                        <h4 className="pt-5">00:00:00:00</h4>
                        <h4 className="pt-5">{name}</h4>
                        <p className="pt-5">Size</p>
                        <p>[ 260 ] [ 265 ] [ 270 ] [ 275 ] [ 280 ]</p>
                        <p>{price}원</p>
                        <div className="d-grid gap-1 pt-3">
                            <Button
                                variant="dark"
                                onClick={() => {
                                    navigate("/drawInfo/");
                                }}>응모</Button>
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    navigate(-1); //useNavigate -1 값을 주면 뒤로 돌아간다.
                                }}>목록</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrawDetail;