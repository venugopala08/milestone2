import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FloatingLabel, Form, Button, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { message } from 'antd';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email !== '' && password !== '';

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="w-30">
          <div>Email address</div>
          <FloatingLabel controlId="floatingInput" className="mb-3">
            <Form.Control 
              type="email" 
              placeholder="name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
          <div>Password</div>
          <FloatingLabel controlId="floatingPassword">
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
          <Button 
            variant="outline-dark" 
            as={Link} 
            to="/Home" 
            disabled={!isFormValid}  
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}