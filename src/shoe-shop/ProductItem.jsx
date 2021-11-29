import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { shoe, addToShoeShopList } = this.props;
    return (
      <div className="col-4 mb-4">
        <div className="card">
          <img className="card-img-top" src={shoe.image} />
          <div className="card-body">
            <h5 className="card-title">{shoe.name}</h5>
            <p className="card-text">{shoe.price}$</p>
          </div>
          <button className="btn btn-dark" onClick={()=> addToShoeShopList(shoe)}  >Add to card</button>
        </div>
      </div>
    );
  }
}
