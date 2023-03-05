import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import "./../styles/MainPage.css";

function MainPage() {
  let [subModal, setSubModal] = useState(false);

  let [alert, setAlert] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  return (
    <div className="MainPage">
      <div className="main-bg"></div>
      <div>
        {alert === true ? (
          <div className="py-3">
            <h3>환영합니다!</h3>
          </div>
        ) : null}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-5">
            <img src={"https://github.com/sitecreater/storage_Drawa.github.io/blob/main/main.jpg?raw=true"} width="82%" alt="" />
          </div>
          <div className="col-md-6 pt-5 my-auto">
            <div className="mainText pt-5">나만을 위한 신발을 얻어보세요👟</div>
            <div className="subText">Drawa 사이트는 응모(Draw)와 상품 구매 항목으로 나뉩니다.</div>
            <div>어려움 없이 간편하게 응모하고 상품 구매도 편하게 이용할 수 있어요.</div>
            <div className="pt-5">
              <div>
                {alert === true ? (
                  <div className="py-3">
                    <h5>모바일 환경이면 Tip을 눌러주세요!</h5>
                  </div>
                ) : null}
              </div>
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
    <Slide top>
      <div className="tipBox">
        <p>화면 맨 밑을 클릭하세요!</p>
        <p>모바일 뷰에서 유용한 메뉴바가 설정될 수 있어요</p>
      </div>
    </Slide>
  );
}

export default MainPage;
