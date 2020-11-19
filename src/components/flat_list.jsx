import React, { Component } from 'react';

import Card from './card'

class FlatList extends Component {
  renderList = () => {
    console.log(this.props.flats)
    return this.props.flats.map((flat, idx) => <Card flat={flat} key={idx} /> );
  }


  render() {
    return this.renderList()
  }
}

export default FlatList;