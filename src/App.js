import React, { Component } from 'react'
import Map from './Map'
import Header from './Header'



export default class App extends Component {
  constructor(){
  super()
    this.state = {
      locations: []
    }
}

componentDidMount(){
  fetch('http://localhost:3000/cities')
    .then(response => response.json())
    .then(cities => this.setState({
      locations: cities
    }))
}



 
 
   
  render() {
    return (
     
      <div className="leaflet-map">
         <Header/>
        <Map locations={this.state.locations} />
        
        
      </div>
    )
  }
}


