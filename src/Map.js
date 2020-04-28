import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet';
// import L from 'leaflet'

class Map extends React.Component {

  displayLocations = () => {
    return this.props.locations.map(location => {
      return (
        <Marker position={[location.longitude, location.latitude]}>
          <Popup>
            
           <ul><b>{location.name}</b>


            <li className="list"><b>Measures Taken:</b> {location.measures}</li>
             <li className="list"><b>Percent Reduction:</b> {location.percent_reduction}%</li>
             </ul>  
          </Popup>
        </Marker>
      )
    })
  }

  render() {
    console.log(this.props.locations)
    return (
      <LeafletMap 
        center={[50, 10]}
        zoom={2.5}
        maxZoom={10}
        minZoom={2.5}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {this.displayLocations()}
        
      </LeafletMap>
    );
  }
}

export default Map

