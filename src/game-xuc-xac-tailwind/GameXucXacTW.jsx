import React, { Component } from "react";
import "./GameXucXacTW.css";
import ThongTinGame from "./ThongTinGame";
import XucXac from "./XucXac";
import { connect} from 'react-redux'
 class GameXucXacTW extends Component {
  render() {
    const {taiXiu} = this.props
    return (
      <div className="game_container ">
        <h1 className="">Game đổ xúc xắc</h1>
        <div className=" ">
          <div className=" ">
            <div className="">
              <button className={`btnTaiXiu ${taiXiu && "btnselected"}`}>
                Tài
              </button>
            </div>
            <div className="">
              <XucXac />
            </div>
            <div className="">
              <button className={`btnTaiXiu ${!taiXiu && "btnselected"}`}>
                Xỉu
              </button>
            </div>
          </div>
          <ThongTinGame />
          <button className="">ĐẶT CƯỢC</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { taiXiu: state.gameXucXacReducer.taiXiu};
}
export default connect(mapStateToProps)(GameXucXacTW);