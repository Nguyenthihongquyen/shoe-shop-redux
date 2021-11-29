import React, { Component } from "react";
import ProductList from "./ProductList";
import productList from "./data.json";
import ShoppingList from "./ShoeShopList";
import { connect } from 'react-redux'

class ShoeShopRedux extends Component {
  state = {
    shoppingList: [],
  };

  calQuantity = (shoppingList) => {
    const shoppingListUpdate = [...shoppingList];
    return shoppingListUpdate.reduce((sumQuantity, currentValue) => {
      const { quantity } = currentValue;
      return (sumQuantity += quantity);
    }, 0);
  };


  render() {
    const { shoppingList } = this.props;

    return (
      <div className="container">
        <div className="row my-3">
          <div className="col-7 text-right">
            <h1 className="pb-2  ">Shoe shop </h1>
          </div>
          <div className="col-5 text-right my-1">
            <button
              type="button"
              className="btn btn-secondary"
              data-toggle="modal"
              data-target="#modelId"
            >
              Shopping List ({this.calQuantity(shoppingList)})
            </button>
          </div>
        </div>
        <ProductList productList={productList} />
        <ShoppingList />
      </div>
    );
  }
}
const mapStateToProps=(state) => {
  return { shoppingList: state.shoeShopReducer.shoppingList};
}
export default connect(mapStateToProps)(ShoeShopRedux);