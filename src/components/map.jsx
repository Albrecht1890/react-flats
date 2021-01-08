import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiYWxicmVjaHQxMzk3IiwiYSI6ImNraG9zdTZiazEydGEycmsxMTc0cDI0dWkifQ.WCxuZeCJx50dpuktY5fq1g'

class MyMap extends Component {

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.props.selectedFlat.lng, this.props.selectedFlat.lat],
      zoom: 10
    });
  }
  
  componentWillReceiveProps() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.props.selectedFlat.lng, this.props.selectedFlat.lat],
      zoom: 12
    });

    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');

    const marker = new mapboxgl.Marker()
      .setLngLat([this.props.selectedFlat.lng, this.props.selectedFlat.lat])
      .addTo(map);
    
      marker.togglePopup()
  }

  render() {
    console.log(this.props.selectedFlat.lng, this.props.selectedFlat.lat)
    return (
      <div ref={el => this.mapContainer = el} className="mapContainer"/>
    )
  }
}

export default MyMap;