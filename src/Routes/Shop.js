import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import {Button} from 'react-bootstrap';
import db from "./../firebase.js";
import {collection, onSnapshot} from 'firebase/firestore';

function Shop() {
    const [item, setItem] = useState([]); //HomePage 상품 배열 정렬 변수
    // console.log(item);

    useEffect(
        () => onSnapshot(collection(db, "shop"), (snapshot) => setItem(snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        })))),
        []
    ); //firebase로 item DB 불러오기

    let navigate = useNavigate();

    let [alert, setAlert] = useState(true);

    useEffect(() => {

        let timer = setTimeout(() => {
            setAlert(false)
        }, 2000);
        return() => {
            clearTimeout(timer)
        }
    }, [alert]);

    return (
        <div className="Shop">
            <div className="container">
                <div className="row pt-5">
                    <CSSTransition timeout={5000}>
                        <div>
                            {
                                alert === true
                                    ? <div className="">
                                            <h5>IAB Studio Product</h5>
                                        </div>
                                    : null
                            }
                        </div>
                    </CSSTransition>
                    { // db정보 출력 반복문
                        item.map((item) => (
                            <div className="col-md-4 pt-5" key={item.id}>
                                <div
                                    className='itemBox pt-5'
                                    onClick={() => {
                                        navigate('/shopDetail/' + item.id, {
                                            state: {
                                                url: item.url,
                                                name: item.name,
                                                price: item.price
                                            }
                                        })
                                    }}>
                                    <img src={item.url + '.jpg'} width="90%" alt=""/>
                                    <p className="pt-5">{item.name}</p>
                                    <p className="pt-3">{item.price}
                                        원</p>
                                    <div className="d-grid gap-1 pt-3">
                                        <Button variant="secondary">구매</Button>
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

export default Shop;