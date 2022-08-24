import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function DrawInfo() {

    let navigate = useNavigate(); //Navigate 함수 호출

    return (
        <div className='DrawInfo'>
            <div className="container pt-5">
                <div className='row pt-5'>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm="sm">
                                <Form.Control type="Home Address" placeholder="Home Address"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm="sm">
                                <Form.Control type="size" placeholder="Size"/>
                            </Col>
                        </Form.Group>
                        <br/>
                        <div className="d-grid gap-1">
                            <Button
                                variant="dark"
                                onClick={() => {
                                    navigate("/drawDone/");
                                }}>응모</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default DrawInfo;