import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MapComponent from './components/Map/Map.js';
import Nav from './components/Nav/Nav.js';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      locations: [],
      latitude: 0,
      longitude: 0
    }
  }

  componentDidMount() {
    axios.get(`https://thingtech-code-challenge.herokuapp.com/api/places?limit=1`)
      .then(res => {
        this.setState({
          locations: res.data.data,
          latitude: res.data.data[0].latitude,
          longitude: res.data.data[0].longitude
        })
        console.log(this.state.locations[0]);
      })
  }

  render() {
    return (
      <div>
        <Nav />
        <MapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          className="map"
        />
        <ul>
          {this.state.locations.map(location => 
          <li>
            <h1>
              {location.city}, {location.state}
            </h1>

            <h5>
              {location.zip}
            </h5>

            <hr/>

            <p>
              {location.description}
            </p>
            
          </li>)}
        </ul>
      </div>
    )
  }
}

export default App;
