import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { host } from "../configs";
import Layout from "../layouts/Layouts";

const Add = () => {
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [job, setJob] = useState('');

  //post data
  const handleClick = () => {
    host
      .post("users", {
        email,
        first_name,
        last_name,
        job
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Layout>
        <Row className="justify-content-center my-3">
          <Col md={4}>
            <Form.Label>First Name</Form.Label>
            <Form.Control name="first_name" type="text" onChange={e => setFirstName(e.target.value)}/> {/*tambahkan onchange*/}
          </Col>
          <Col md={4}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control name="last_name" type="text" onChange={e => setLastName(e.target.value)} /> {/*tambahkan onchange*/}
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col md={4}>
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" onChange={e => setEmail(e.target.value)} /> {/*tambahkan onchange*/}
          </Col>
          <Col md={4}>
            <Form.Label>Job</Form.Label>
            <Form.Control name="job" type="text" onChange={e => setJob(e.target.value)} /> {/*tambahkan onchange*/}
          </Col>
        </Row>
        <Row className="text-center my-3">
          <Col>
            <a onClick={() => handleClick()} className="btn btn-primary">
              Add User
            </a>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Add;
