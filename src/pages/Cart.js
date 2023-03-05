import React from "react";
import { Button, Table } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./../styles/Cart.css";

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
        {props.alertOpen === true ? (
          <div className="buyAlert py-3">
            <h5>[배송 지연 안내]</h5>
            <h5>현재 주문량이 많아 배송이 지연되고있습니다😣</h5>
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
        variant="dark outline-primary mx-1"
        onClick={() => {
          navigate("/shopPay/");
        }}
      >
        구매하기
      </Button>
      <Button
        variant="dark outline-primary mx-1"
        onClick={() => {
          navigate(-1); //useNavigate -1 값을 주면 뒤로 돌아간다.
        }}
      >
        뒤로가기
      </Button>
    </div>
  );
}
function stateChangeProps(state) {
  return { state: state.reducer, alertOpen: state.reducer2 };
}
export default connect(stateChangeProps)(Cart);
