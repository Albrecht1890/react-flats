import React, { Component } from 'react';
import FlatList from './flat_list';
import MyMap from './map';

import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      flats,
      selectedFlat: flats[0],
    } 
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    })
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={this.state.flats} selectFlat={this.selectFlat}/>
        </div>
        <div className="map-container">
          <MyMap selectedFlat={this.state.selectedFlat} flats={this.state.flats}/>
        </div>
      </div>
    )
  }
}

export default App;