import React from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import AppList from './AppList'

import './Bar.css'

class Bar extends React.Component
{
  render()
  {
    return (
      <Col sm={12} lg={6} id="bar">
        <Col xs={12} className="text-center"><Image src="https://onichandame.github.io/avatar.jpg" roundedCircle/></Col>
        <AppList />
      </Col>
    )
  }
}

export default Bar
