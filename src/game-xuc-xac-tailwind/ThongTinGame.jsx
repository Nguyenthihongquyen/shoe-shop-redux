import React, { Component } from 'react'
import { connect } from 'react-redux'
class ThongTinGame extends Component {
    render() {
        const {taiXiu,soBanThang,soBanChoi} = this.props
        return (
          <div className="">
            <h1>Bạn Chọn: {taiXiu?'Tài':'Xỉu'}</h1>
            <h1>
              Số bàn thắng: <span className="">{soBanThang}</span>
            </h1>
            <h1>
              Tổng số bàn chơi: <span className="">{soBanChoi}</span>{" "}
            </h1>
          </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      taiXiu: state.gameXucXacReducer.taiXiu,
      soBanThang: state.gameXucXacReducer.soBanThang,
      soBanChoi: state.gameXucXacReducer.soBanChoi,
    };
}
export default connect(mapStateToProps)(ThongTinGame);