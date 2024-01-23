import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import config from'../config'
import { useNavigate } from 'react-router-dom';

function ForgotPage() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const handleBtnClick = async (event)=>{
      event.preventDefault();
      await  axios.put(`${config.API_URL}/users/${email}`)
      .then((response)=>{
        window.alert(response.data.message)
        navigate('/users/reset')
      })
    }
    
  return (
    <div>
      <h1>Password Reset Page</h1>
        <Form onSubmit= { handleBtnClick }>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Email  :</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={ email }
              onChange={e=>setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Enter Your Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder='Enter password' 
              onChange={e=>setPassword(e.target.value)}
              value={ password }
            />
          </Form.Group>
          <Button 
            variant="primary" 
            type="submit"
            >
            ForgotPassword
          </Button>
        </Form>  
    </div>
  )
}

export default ForgotPage