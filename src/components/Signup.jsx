import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import config from '../config';
import { useNavigate } from 'react-router-dom';


function Signup({ users , getAllUsers }) {
  const navigate = useNavigate();
  const [username,setusername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleBtnClick = async (event) => {
    event.preventDefault();
    try {
      const newUser = {
        username ,
        email,
        password
      }
      await axios.post(`${config.API_URL}/users`,newUser)
        .then (()=>{
          window.alert('user created successfully');
          getAllUsers();
          navigate('/users')
        })
        .catch((error)=>{
          window.alert(error.response.data.message);
        })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1 > Register / Signup</h1>
      <Form onSubmit={ handleBtnClick }>
        <Form.Group className="mb-3" controlId="formGroupName" >
          <Form.Label>User Name</Form.Label>
          <Form.Control  
            placeholder="Enter username" 
            onChange={ e => setusername(e.target.value) }
            value={ username }
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
            value={ email }
            required
           />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"  
            placeholder="Enter Password" 
            onChange={ e => setPassword(e.target.value)}
            value={ password }
            required
          />
        </Form.Group>
        <Button 
          variant="success" 
          size="lg" 
          type='submit'
        >Register / Signup</Button>
      </Form>
    </div>
  )
}

export default Signup;