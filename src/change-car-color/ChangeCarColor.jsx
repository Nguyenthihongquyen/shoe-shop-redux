import React, { Component } from "react";

export default class ChangeCarColor extends Component {
  state = {
    imgCar: "black-car.jpg",
  };

  handleChangeCar = (imgCar) => {
    this.setState({ imgCar: imgCar });
  };
  render() {
    const { imgCar } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-7">
            <img src={`./images/${imgCar}`} className="w-100" />
          </div>
          <div className="col-5 ">
            <div className="card border-dark">
              <div className="card-header">Exterior Color</div>
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeCar("black-car.jpg")}
                >
                  <div className="row">
                    <div className="col-2">
                      <img
                        src="./images/icon-black.jpg"
                        style={{ width: "60px" }}
                      />
                    </div>
                    <div className="col-10">
                      <h4>Crystal Black</h4>
                      <p>Pearl</p>
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeCar("steel-car.jpg")}
                >
                  <div className="row">
                    <div className="col-2">
                      <img
                        src="./images/icon-steel.jpg"
                        style={{ width: "60px" }}
                      />
                    </div>
                    <div className="col-10">
                      <h4>Modern Steel</h4>
                      <p>Pearl</p>
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeCar("silver-car.jpg")}
                >
                  <div className="row">
                    <div className="col-2">
                      <img
                        src="./images/icon-silver.jpg"
                        style={{ width: "60px" }}
                      />
                    </div>
                    <div className="col-10">
                      <h4> Lunar Silver</h4>
                      <p>Pearl</p>
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeCar("red-car.jpg")}
                >
                  <div className="row">
                    <div className="col-2">
                      <img
                        src="./images/icon-red.jpg"
                        style={{ width: "60px" }}
                      />
                    </div>
                    <div className="col-10">
                      <h4> Rallye Red</h4>
                      <p>Pearl</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
