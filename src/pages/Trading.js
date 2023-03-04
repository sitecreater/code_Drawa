import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import { getDrawData } from "../firebase.js";

function Trading() {
  const [draw, setDraw] = useState([]);

  useEffect(() => {
    getDrawData(setDraw);
  }, []);

  return (
    <div className="Trading">
      <div className="container">
        <div className="row pt-4">
          <Alert variant="light">
            <h1>Today Price</h1>
          </Alert>
          {
            // db정보 출력 반복문
            draw.map((draw) => (
              <div className="col-md-4 pt-5" key={draw.id}>
                <div className="drawBox pt-5">
                  <img src={draw.url + ".jpg"} width="70%" alt="" />
                  <h6 className="pb-4">{draw.name}</h6>
                  <Alert variant="dark">Release Price : {draw.price}원</Alert>
                  <Alert variant="success">
                    Today Price : {draw.todayPrice}원<i class="fa-solid fa-up-long"></i>
                  </Alert>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Trading;
