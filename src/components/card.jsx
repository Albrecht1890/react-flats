import React, { Component } from 'react';

class Card extends Component {
  render() {
    const cardStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('${this.props.flat.imageUrl}')`
    }
    return (
      <div
        className="card"
        style={cardStyle}
        >
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a href="#" className="card-link">this is the link</a>
      </div>
    )
  }
}

export default Card;