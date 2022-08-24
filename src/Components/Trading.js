import React, {useEffect, useState} from 'react';
import db from "../firebase.js";
import {collection, onSnapshot} from 'firebase/firestore';
import Alert from 'react-bootstrap/Alert';

function Trading() {
    const [draw, setDraw] = useState([]); //Draw 상품 배열 정렬 변수
    useEffect(
        () => onSnapshot(collection(db, "draw"), (snapshot) => setDraw(snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        })))),
        []
    ); //firebase로 draw DB 불러오기

    return (
        <div className='Trading'>
            <div className="container">
                <div className="row pt-4">
                    <Alert variant="light">
                        <h1>Today Price</h1>
                    </Alert>
                    { // db정보 출력 반복문
                        draw.map((draw) => (
                            <div className="col-md-4 pt-5" key={draw.id}>
                                <div className='drawBox pt-5'>
                                    <img src={draw.url + '.jpg'} width="70%" alt=""/>
                                    <h6 className='pb-4'>{draw.name}</h6>
                                    <Alert variant="dark">
                                        Release Price : {draw.price}
                                        원
                                    </Alert>
                                    <Alert variant="success">
                                        Today Price : {draw.todayPrice}
                                        원
                                        <i class="fa-solid fa-up-long"></i>
                                    </Alert>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Trading;