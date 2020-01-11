import React from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Register extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      email:'',
      username:''
    }
  }
  render()
  {
    return (
      <Col sm={12} lg={6} id="bar" style={{top:'100px'}}>
        <h1>Want to use the services?</h1>
        <Form className="text-center">
          <Form.Group controlId="email" className="text-left">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="someone@abc.com" required/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Signup
          </Button>
        </Form>
      </Col>
    )
  }
}

export default Register
