import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import db from "../firebase.js";

function DrawInfo() {
  const [nickName, setNickName] = useState({});
  const [address, setAddress] = useState({});
  const [size, setSize] = useState({});
  const [errors, setErrors] = useState({});

  const SetLocation = (location, value) => {
    setAddress({
      ...address,
      [location]: value,
    });

    if (!!errors[location])
      setErrors({
        ...errors,
        [location]: null,
      });
  };

  const SetShoes = (wear, value) => {
    setSize({
      ...size,
      [wear]: value,
    });

    if (!!errors[wear])
      setErrors({
        ...errors,
        [wear]: null,
      });
  };

  const SetName = (name, value) => {
    setNickName({
      ...nickName,
      [name]: value,
    });

    if (!!errors[name])
      setErrors({
        ...errors,
        [name]: null,
      });
  };

  const add = collection(db, "info");

  // users 콜렉션에 nickName:{nickName}, address:{address}, size:{size}인 row를 추가
  const addData = async () => {
    try {
      const res = await addDoc(add, { nickName, address, size });
      console.log(res); // res는 undefined입니다.
    } catch (e) {
      console.log(e);
    }
  };

  let navigate = useNavigate(); //Navigate 함수 호출

  return (
    <div className="DrawInfo my-5 py-5">
      <div className="container py-5">
        <div className="row pt-5">
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Col sm="sm">
                <Form.Control value={nickName.nickName} onChange={(e) => SetName("nickName", e.target.value)} type="nickName" placeholder="NickName" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Col sm="sm">
                <Form.Control value={address.address} onChange={(e) => SetLocation("address", e.target.value)} type="address" placeholder="Address" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Col sm="sm">
                <Form.Control value={size.size} onChange={(e) => SetShoes("size", e.target.value)} type="size" placeholder="Size" />
              </Col>
            </Form.Group>
            <br />
            <div className="d-grid gap-1">
              <Button
                variant="dark"
                onClick={() => {
                  addData();
                  navigate("/drawDone/");
                }}
              >
                응모
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default DrawInfo;
