import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import db from "../firebase.js";
import {collection, onSnapshot} from 'firebase/firestore';

function Draw() {
    const [draw, setDraw] = useState([]); //Draw 상품 배열 정렬 변수
    // console.log(draw);
    let [alert, setAlert] = useState(true);

    useEffect(
        () => onSnapshot(collection(db, "draw"), (snapshot) => setDraw(snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        })))),
        []
    ); //firebase로 draw DB 불러오기

    let navigate = useNavigate(); //Navigate 함수 호출

    useEffect(() => {

        let timer = setTimeout(() => {
            setAlert(false)
        }, 2000);
        return() => {
            clearTimeout(timer)
        }
    }, [alert]);
    return (
        <div className="Draw pt-5">
            <div className="container pt-5">
                <div className="row pt-5">
                    <CSSTransition timeout={5000}>
                        <div>
                            {
                                alert === true
                                    ? <div className="">
                                            <h5>Draw Edition</h5>
                                        </div>
                                    : null
                            }
                        </div>
                    </CSSTransition>

                    { // db정보 출력 반복문
                        draw.map((draw) => (
                            <div className="col-md-4 pt-5" key={draw.id}>
                                <div
                                    className='drawBox'
                                    onClick={() => {
                                        navigate('/drawDetail/' + draw.id, { //navigate hook 에 props 전송
                                            state: {
                                                url: draw.url,
                                                name: draw.name,
                                                price: draw.price,
                                                endDate: draw.endDate
                                            }
                                        })
                                    }}>
                                    <img src={draw.url + '.jpg'} width="80%" alt=""/>
                                    <p>{draw.name}</p>
                                    <p className="pt-3">{draw.price}
                                        원</p>
                                    <p className="pt-1">{draw.endDate}</p>
                                    <div className="d-grid gap-1 pt-3">
                                        <Button variant="secondary">응모</Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Draw;