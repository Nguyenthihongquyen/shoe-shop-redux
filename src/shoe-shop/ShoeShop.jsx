import React, { Component } from "react";
import ProductList from "./ProductList";
import productList from "./data.json";
import ShoeShopList from "./ShoeShopList";

export default class ShoeShop extends Component {
 state = {
    shoeShopList: [],
  };
  addToShoeShopList = (shoe) => {
    const shoeShopListUpdate = [...this.state.shoeShopList];
    const index = shoeShopListUpdate.findIndex((item) => item.id === shoe.id);
    if (index === -1) {
      const newShoe = { ...shoe, quantity: 1 };
      shoeShopListUpdate.push(newShoe);
    } else {
      shoeShopListUpdate[index].quantity += 1;
    }
    this.setState({ shoeShopList: shoeShopListUpdate });
  };

  updateQuantity = (id, action) => {
    const shoeShopListUpdate = [...this.state.shoeShopList];
    const index = shoeShopListUpdate.findIndex((item) => item.id === id);
    if (action) {
      shoeShopListUpdate[index].quantity += 1;
    } else {
      if (shoeShopListUpdate[index].quantity > 1) {
        shoeShopListUpdate[index].quantity -= 1;
      }
    }
    this.setState({ shoeShopList: shoeShopListUpdate });
  };

  calQuantity = () => {
     const shoeShopListUpdate = [...this.state.shoeShopList];
     return shoeShopListUpdate.reduce((sumQuantity, currentValue) =>{
       const {quantity} = currentValue;
return sumQuantity += quantity
     },0)
  }

  removeFromShoeShopList = (id) => {
      const shoeShopListUpdate = [...this.state.shoeShopList];
      const index = shoeShopListUpdate.findIndex((item) => item.id === id);
      shoeShopListUpdate.splice(index, 1)
      this.setState({ shoeShopList: shoeShopListUpdate });
  }

  render() {
    const { shoeShopList } = this.state;

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
              Shopping List ({this.calQuantity()})
            </button>
          </div>
        </div>
        <ProductList
          productList={productList}
          addToShoeShopList={this.addToShoeShopList}
        />
        <ShoeShopList
          shoeShopList={shoeShopList}
          updateQuantity={this.updateQuantity}
          removeFromShoeShopList={this.removeFromShoeShopList}
        />
      </div>
    );
  }
}
