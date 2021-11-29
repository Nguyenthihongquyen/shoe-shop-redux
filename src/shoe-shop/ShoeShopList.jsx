import React, { Component } from "react";

export default class ShoeShopList extends Component {
  render() {
    const { shoeShopList, updateQuantity, removeFromShoeShopList } = this.props;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Shoe shop list</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {" "}
              {shoeShopList.length > 0 ? (
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shoeShopList.map((shoe, idx) => {
                      const { id, name, image, price, quantity } = shoe;
                      return (
                        <tr key={idx}>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td>
                            <img src={image} width="50px" />
                          </td>
                          <td>{price}$</td>
                          <td>
                            <button
                              className="btn btn-success"
                              onClick={() => updateQuantity(id, true)}
                            >
                              +
                            </button>{" "}
                            {quantity}{" "}
                            <button
                              className="btn btn-danger"
                              onClick={() => updateQuantity(id, false)}
                            >
                              -
                            </button>
                          </td>
                          <td>{price * quantity}$</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => removeFromShoeShopList(id)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>{" "}
                </table>
              ) : (
                <p className="text-center">No item in cart. Let's shopping</p>
              )}
              {shoeShopList.length > 0 && (
                <p className="text-right mr-4">
                  total payment:{" "}
                  {shoeShopList.reduce((totalPayment, currentValue) => {
                    const { price, quantity } = currentValue;
                    return (totalPayment += price * quantity);
                  }, 0)}
                  $
                </p>
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-danger">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
