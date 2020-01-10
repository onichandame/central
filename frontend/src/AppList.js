import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './AppList.css'

class AppList extends React.Component
{
  constructor(props)
  {
    super(props)
    this.parseApp=this.parseApp.bind(this)
    this.state={
      apps:[]
    }
  }

  componentDidMount()
  {
    fetch('/applist')
      .then(res=>res.json())
      .then(apps=>{
        this.setState({apps})
      })
  }

  render()
  {
    return (
      <Carousel id="applist" className="text-center h-30">
        {this.parseApp()}
      </Carousel>
    )
  }

  parseApp()
  {
    let result=[]
    if(!Array.isArray(this.state.apps)) return result
    this.state.apps.forEach(app=>{
      result.push(
        <Carousel.Item className="subapp h-100 text-center">
          <a href={app.link}><img className="d-block h-100" src={app.icon} alt={app.title}/></a>
          <Carousel.Caption><p>{app.title}</p></Carousel.Caption>
        </Carousel.Item>
      )
    })
    return result
  }
}

export default AppList
