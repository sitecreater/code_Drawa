import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getDrawData } from "../../firebase.js";

function Draw() {
  const [draw, setDraw] = useState([]);

  useEffect(() => {
    getDrawData(setDraw);
  }, []);

  let navigate = useNavigate(); //Navigate 함수 호출

  return (
    <div className="Draw pt-5">
      <div className="container pt-5">
        <div className="row">
          <div>
            <h5>Draw Edition</h5>
          </div>
          {draw.map((draw) => (
            <div className="col-md-4 pt-5" key={draw.id}>
              <div
                className="drawBox"
                onClick={() => {
                  navigate("/drawDetail/" + draw.id, {
                    //navigate hook 에 props 전송
                    state: {
                      url: draw.url,
                      name: draw.name,
                      price: draw.price,
                      endDate: draw.endDate,
                    },
                  });
                }}
              >
                <img src={draw.url + ".jpg"} width="80%" alt="" />
                <p>{draw.name}</p>
                <p className="pt-3">{draw.price}원</p>
                <p className="pt-1">{draw.endDate}</p>
                <div className="d-grid gap-1 pt-3">
                  <Button variant="secondary">응모</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Draw;
