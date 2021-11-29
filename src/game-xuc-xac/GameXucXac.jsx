import React, { Component } from "react";
import "./GameXucXac.css";
import ThongTinGame from "./ThongTinGame";
import XucXac from "./XucXac";
import { connect} from 'react-redux'
 class GameXucXac extends Component {
  render() {
    const {taiXiu} = this.props
    return (
      <div className="game_container ">
        <h1 className="text-center py-4">Game đổ xúc xắc</h1>
        <div className="container-fluid text-center ">
          <div className="row ">
            <div className="col-5">
              <button className={`btnTaiXiu ${taiXiu && "btnselected"}`}>
                Tài
              </button>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <XucXac />
            </div>
            <div className="col-5 ">
              <button className={`btnTaiXiu ${!taiXiu && "btnselected"}`}>
                Xỉu
              </button>
            </div>
          </div>
          <ThongTinGame />
          <button className="btn btn-success my-4 ">ĐẶT CƯỢC</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { taiXiu: state.gameXucXacReducer.taiXiu};
}
export default connect(mapStateToProps)(GameXucXac);