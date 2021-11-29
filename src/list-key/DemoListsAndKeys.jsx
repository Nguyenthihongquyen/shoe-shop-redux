import React, { Component } from "react";

export default class DemoListsAndKeys extends Component {
  ProductLists = [{ id: 1, name: "Crytal black", price: 100000, imgCar:'./images/black-car.jpg' },
  { id: 2, name: "Crytal black", price: 100000, imgCar:'./images/steel-car.jpg' },
  { id: 3, name: "Crytal black", price: 100000, imgCar:'./images/silver-car.jpg' },
{ id: 4, name: "Crytal black", price: 100000, imgCar:'./images/red-car.jpg' }
];

renderProductLists = () => {
    return this.ProductLists.map((car,index)=>{
        return (
          <tr>
            <td>{car.id}</td>
            <td>{car.name}</td>
            <td>{car.price}</td>
            <td><img src={car.imgCar} width={150} /></td>
          </tr>
        );
    })
}

  render() {
    return <div className="text-center">
        <h1>List Car</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
               {this.renderProductLists()}
            </tbody>
        </table>
    </div>;
  }
}
