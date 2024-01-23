import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import config from'../config'
import { useNavigate } from 'react-router-dom';

function Resetpage() {

    const [email,setEmail] = useState('');
    const [randomString,setRandomString] = useState('');
    const [password ,setPassword] = useState('');
    const navigate = useNavigate();
    const handleVerify = async (event) => {
        event.preventDefault();
        await axios.patch(`${config.API_URL}/users/${randomString}`)
            .then((response)=>{
                window.alert(response.data.message)
                document.getElementById('newPasswordForm').removeAttribute('style');
            })
            .catch((error) => {
                console.log(error.response.data.message);
            })
    }
     
    const updatePassword = async (event) => {
        event.preventDefault();
        await axios.patch(`${config.API_URL}/users/verified/${email}`,email)
            .then((response)=>{
                window.alert(response.data.message)
                navigate('/');
            })
    }

    const display = {
        display:'none'
    }
  return (
    <div>
    <h1>Password Reset Page</h1>
      <Form onSubmit={ handleVerify}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Your Email  :</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={ email }
            onChange={e=>setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label> Enter the Password which recieve in your Email</Form.Label>
          <Form.Control 
            placeholder='Enter String ' 
            value={ randomString }
            onChange={e=>setRandomString(e.target.value)}
          />
        </Form.Group>
        <Button 
          variant="primary" 
          type="submit"
          >
          Verify String
        </Button>
        <div style={ display } id='newPasswordForm'> 
            <Form.Group className="mb-3" >
            <Form.Label> Enter New Password</Form.Label>
            <Form.Control 
                type="password"  
                placeholder="Enter Password" 
                onChange={ e=> setPassword(e.target.value)}
                value={password}
            />
            </Form.Group>
            <Button 
          variant="primary" 
          type="submit"
          onClick={ updatePassword }
          >
           Update Password
        </Button >
        </div>
      </Form>  
    </div>
  )
}

export default Resetpage;

