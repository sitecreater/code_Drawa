import React from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function ShopDetail() {
  const location = useLocation();
  const { url, name, price } = location.state;
  let navigate = useNavigate(); //Navigate 함수 호출

  return (
    <div className="ShopDetail">
      <div className="container pt-5">
        <div className="row pt-5">
          <div className="col-md-6 pt-5">
            <img src={url + ".jpg"} width="90%" alt="" />
          </div>
          <div className="col-md-6 pt-5 my-auto">
            <h4 className="pt-5">{name}</h4>
            <p className="pt-5">Size</p>
            <div>
              <Button variant="outline-primary mx-1">S</Button>
              <Button variant="outline-primary mx-1">M</Button>
              <Button variant="outline-primary mx-1">L</Button>
              <Button variant="outline-primary mx-1">XL</Button>
            </div>
            <p className="pt-5">{price}원</p>
            <div className="d-grid gap-1 pt-3">
              <Button
                variant="dark"
                onClick={() => {
                  navigate("/shopPay/");
                }}
              >
                구매
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  navigate(-1); //useNavigate -1 값으로 뒤로 가기
                }}
              >
                목록
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDetail;
