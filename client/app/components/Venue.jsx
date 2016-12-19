import React from 'react';
import ReactDOM from 'react-dom';
import {Map, Marker, mapCenter} from 'google-maps-react';
import $ from 'jquery';


class Venue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      google: window.google,
      coord: {lat: 37.783705, lng: -122.408977}
    };
  }

  componentDidMount() {
    $.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=', function(resp) {
      this.setState({
        coord: resp.results[0].geometry.location
      });
    }.bind(this));
  }

  render() {
    return (
      <div className="map">
        <Map google={window.google}
           style={{width: '750px', height: '500px', position: 'relative'}}
           className={'map'}
           zoom={14}
           initialCenter={{lat: this.state.coord.lat, lng: this.state.coord.lng}}
           // onReady={console.log}
           >
          <Marker />
        </Map>
      </div>
    );
  }
}

// HR: {lat: 37.783705, lng: -122.408977}
// Google: {lat: 37.4223664, lng: -122.084406}

export default Venue;

// Map.defaultProps = {
//   zoom: 14,
//   initialCenter: {
//     lat: 43.783705,
//     lng: -122.408977
//   },
//   center: {},
//   centerAroundCurrentLocation: false,
//   style: {},
//   containerStyle: {},
//   visible: true
// }


// import React from 'react';
// import ReactDOM from 'react-dom';
// import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

// const Venue = withGoogleMap(props => (
//  <GoogleMap
//     ref={props.onMapLoad}
//     defaultZoom={3}
//     defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
//     onClick={props.onMapClick}
//   >
//     {props.markers.map(marker => (
//       <Marker
//         {...marker}
//         onRightClick={() => props.onMarkerRightClick(marker)}
//       />
//     ))}
//   </GoogleMap>
// ));


// export default class Venue extends Component {
//  state = {
//     markers: [{
//       position: {
//         lat: 25.0112183,
//         lng: 121.52067570000001,
//       },
//       key: `Taiwan`,
//       defaultAnimation: 2,
//     }],
//   };

//   handleMapLoad = this.handleMapLoad.bind(this);
//   handleMapClick = this.handleMapClick.bind(this);
//   handleMarkerRightClick = this.handleMarkerRightClick.bind(this);

//   handleMapLoad(map) {
//     this._mapComponent = map;
//     if (map) {
//       console.log(map.getZoom());
//     }
//   }

//   handleMapClick(event) {
//     const nextMarkers = [
//       ...this.state.markers,
//       {
//         position: event.latLng,
//         defaultAnimation: 2,
//         key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
//       },
//     ];
//     this.setState({
//       markers: nextMarkers,
//     });

//     if (nextMarkers.length === 3) {
//       this.props.toast(
//         `Right click on the marker to remove it`,
//         `Also check the code!`
//       );
//     }
//   }

//   handleMarkerRightClick(targetMarker) {
//     /*
//      * All you modify is data, and the view is driven by data.
//      * This is so called data-driven-development. (And yes, it's now in
//      * web front end and even with google maps API.)
//      */
//     const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
//     this.setState({
//       markers: nextMarkers,
//     });
//   }

//   render() {
//     return (
//       <div style={{height: `100%`}}>
//         {true /*<Helmet
//           title="Getting Started"
//         />*/ }
//         <Venue
//           containerElement={
//             <div style={{ height: `100%` }} />
//           }
//           mapElement={
//             <div style={{ height: `100%` }} />
//           }
//           onMapLoad={this.handleMapLoad}
//           onMapClick={this.handleMapClick}
//           markers={this.state.markers}
//           onMarkerRightClick={this.handleMarkerRightClick}
//         />
//       </div>
//     );
//   }
// }
