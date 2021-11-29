import React, { Component } from "react";
import { connect } from 'react-redux'

class ProductItem extends Component {
  render() {
    const { shoe, addToShoppingList } = this.props;
    return (
      <div className="col-4 mb-4">
        <div className="card">
          <img className="card-img-top" src={shoe.image} alt={shoe.image} />
          <div className="card-body">
            <h5 className="card-title">{shoe.name}</h5>
            <p className="card-text">{shoe.price}$</p>
          </div>
          <button
            className="btn btn-dark"
            onClick={() => addToShoppingList(shoe)}
          >
            Add to card
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
  return { addToShoppingList:(shoe)=>{
    const action ={
      type: 'ADD_TO_SHOPPING_LIST',
      payload: shoe
    }
    dispatch(action);
  } };
}
export default connect(null, mapDispatchToProps)(ProductItem);
