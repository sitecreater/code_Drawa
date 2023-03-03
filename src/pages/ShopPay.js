import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ShopPay() {
  let navigate = useNavigate(); //Navigate 함수 호출

  return (
    <div className="ShopPay pt-5">
      <div className="container pt-5">
        <div className="row pt-5">
          <h1 className="pt-5">지금은 구매가 불가능 해요😣</h1>
        </div>
        <div className="pt-5">
          <Button
            variant="dark"
            onClick={() => {
              navigate("/");
            }}
          >
            나가기
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShopPay;
