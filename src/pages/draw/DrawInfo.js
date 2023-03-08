import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addData } from "../../firebase.js";

function DrawInfo() {
  const [name, setName] = useState({});
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

  const setIdentification = (name, value) => {
    setName({
      ...name,
      [name]: value,
    });

    if (!!errors[name])
      setErrors({
        ...errors,
        [name]: null,
      });
  };

  let navigate = useNavigate(); //Navigate 함수 호출

  return (
    <div className="DrawInfo my-5 py-5">
      <div className="container py-5">
        <div className="row pt-5">
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="null">
              <Col sm="sm">
                <Form.Control value={name.name} onChange={(e) => setIdentification("name", e.target.value)} type="name" placeholder="name" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="null">
              <Col sm="sm">
                <Form.Control value={address.address} onChange={(e) => SetLocation("address", e.target.value)} type="address" placeholder="Address" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="null">
              <Col sm="sm">
                <Form.Control value={size.size} onChange={(e) => SetShoes("size", e.target.value)} type="size" placeholder="Size" />
              </Col>
            </Form.Group>
            <br />
            <div className="d-grid gap-1">
              <Button
                variant="dark"
                onClick={() => {
                  const data = {
                    name: name.name,
                    address: address.address,
                    size: size.size,
                  };
                  addData(data);
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
