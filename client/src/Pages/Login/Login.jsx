import './Login.css'
import { Container, Row,Col, Form, Button } from "react-bootstrap";
import { useState } from 'react';
import PropTypes from 'prop-types'
async function loginuser(credentials){
  return fetch('http://localhost:1234/login',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
   body:JSON.stringify( credentials)
  }).then(data=>
    data.json())
}
export default function Login({setToken}){
const [username,setUsername]=useState();
const [password,setPassword]=useState();
  const add= async e=>{
  e.preventDefault();
  const token=await loginuser({
  username,
  password,
  });
  setToken(token);
  }
    return(
        <div  className="Login-main">
            <Container>
  <Row>
    <Col >
    <div className='main_box_logo'>
    <img src="" className='logo'/>
    <h1 className='logo-text'>Dec</h1>
    </div>
    </Col>
  </Row>
  <Row className='blankSpace'>
  </Row>
  <Row>
  <Col></Col>
    <Col xs={10} lg={5} >
        <div  className='login-box'>
            <h5 className='heading-text'>User Login</h5>
            <p className="small-text">Enter username and password</p>
        <Form onSubmit={add}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" className='input'   name="email"onChange={e=>setUsername(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" className='input'  name="password"onChange={e=>setPassword(e.target.value)} />
  </Form.Group >

     
      <Button  type="submit" className='btn' >
      <h4 className='button-text'>LOGIN</h4>
  </Button>
  
  
</Form>
        </div>
    </Col>
    <Col></Col>
  </Row>
</Container>
        </div>
    )
}
Login.propTypes={
  setToken:PropTypes.func.isRequired

};