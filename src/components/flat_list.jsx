import React, { Component } from 'react';

import Card from './card'

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map((flat, idx) => <Card flat={flat} key={idx} selectFlat={this.props.selectFlat}/> );
  }


  render() {
    return this.renderList()
  }
}

export default FlatList;