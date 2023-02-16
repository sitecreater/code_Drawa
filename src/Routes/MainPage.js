import { Button } from "react-bootstrap";
import React, { useState } from "react";
import "./../CSS/MainPage.css";
import { Link } from "react-router-dom";

function MainPage() {
  let [subModal, setSubModal] = useState(false);

  return (
    <div className="MainPage">
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-5">
            <img
              src={
                "https://github.com/sitecreater/storage_Drawa.github.io/blob/main/main.jpg?raw=true"
              }
              width="82%"
              alt=""
            />
          </div>
          <div className="col-md-6 pt-5 my-auto">
            <div className="mainText pt-5">
              나만을 위한 한정판 신발을 얻어보세요
            </div>
            <div className="subText pt-5">
              drawa 사이트는 드로우(응모)와 상품 구매 항목으로 나뉩니다.
              드로우에서도 어려움 없이 간편하게 응모하고, 상품 구매도 편하게
              이용할 수 있어요.
            </div>
            <div className="pt-5">
              <Button variant="dark" as={Link} to="/draw" onClick={() => {}}>
                드로우 상품 보러가기
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setSubModal(!subModal);
                }}
              >
                Tip
              </Button>
              {subModal === true ? <TipBox></TipBox> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TipBox() {
  return (
    <div className="tipBox">
      <p>화면 맨 밑을 클릭하세요!</p>
      <p>모바일 뷰에서 유용한 메뉴바가 설정될 수 있어요</p>
    </div>
  );
}

export default MainPage;
