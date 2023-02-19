import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./../CSS/Cart.css";

function Cart(props) {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div className="container my-5 py-5">
      <h2>Cart</h2>
      <div className="CartTable row my-5 mb-5 pb-5">
        <Table responsive="responsive pb-2">
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경</th>
            </tr>
          </thead>
          <tbody>
            {state.reducer.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td
                    onClick={() => {
                      navigate("/shop");
                    }}
                  >
                    {a.name}
                  </td>
                  <td>{a.quan}</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch({ type: "MountAdd", Data: a.id });
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        dispatch({ type: "MountSubtract", Data: a.id });
                      }}
                    >
                      -
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {props.alertBase === true ? (
          <div className="my-alert">
            <p>현재 몇명이 응모했습니다.</p>
            <button
              onClick={() => {
                dispatch({ type: "alertClose" });
              }}
            >
              닫기
            </button>
          </div>
        ) : null}
      </div>
      <Button
        variant="dark"
        onClick={() => {
          navigate(-1); //useNavigate -1 값을 주면 뒤로 돌아간다.
        }}
      >
        뒤로가기
      </Button>
    </div>
  );
}
export default Cart;
