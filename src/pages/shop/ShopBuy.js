import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ShopBuy() {
  let navigate = useNavigate(); //Navigate 함수 호출

  return (
    <div className="ShopPay pt-5">
      <div className="container pt-5">
        <div className="row pt-5">
          <h1 className="pt-5">준비된 상품이 모두 품절되었습니다😣</h1>
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

export default ShopBuy;
