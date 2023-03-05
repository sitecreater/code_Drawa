import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { signInWithGoolgle } from "../firebase";
import "./../styles/MainPage.css";

function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="container pt-5">
        <div className="row pt-5">
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Col sm="sm">
                <Form.Control type="id" placeholder="ID" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Col sm="sm">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <br />
            <div className="loginText pt-5">
              <h1>{localStorage.getItem("name")}님 Drawa의 세계에 오신 걸 환영합니다!</h1>
              <h5 className="pt-5">
                당신의 이메일은 {localStorage.getItem("email")}
                이고,
              </h5>
              <h5>
                멋진 프로필
                <img src={localStorage.getItem("profilePic")} width="8%" alt="" />을 가지셧네요!
              </h5>
            </div>
            <div className="d-grid gap-1">
              <Button variant="secondary" onClick={signInWithGoolgle}>
                구글로 로그인
              </Button>
              <Button variant="secondary">로그인 변경하기</Button>
              <Button variant="secondary">회원가입</Button>
              <Button variant="secondary">로그아웃</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
