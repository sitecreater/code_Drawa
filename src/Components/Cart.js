import React from 'react';
import {Table} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

function Cart(props) {

    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    return (
        <div>
            <Table responsive="responsive">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state
                            .reducer
                            .map((a, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{a.id}</td>
                                        <td
                                            onClick={() => {
                                                navigate('/shop/')
                                            }}>{a.name}</td>
                                        <td>{a.quan}</td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    dispatch({type: 'MountAdd', Data: a.id})
                                                }}>+</button>
                                            <button
                                                onClick={() => {
                                                    dispatch({type: 'MountSubtract', Data: a.id})
                                                }}>-</button>
                                        </td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </Table>
            {
                props.alertOpen === true
                    ? (
                        < div className = 'my-alert' > <p>현재 몇명이 응모했습니다.</p>
                        <button
                            onClick={() => {
                                dispatch({type: 'alertClose'})
                            }}>닫기</button>
                    </div>
                    )
                    : null
            }
        </div>
    )
}
export default Cart;