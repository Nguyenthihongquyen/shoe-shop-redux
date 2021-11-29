import React, { Component } from 'react'
import { connect } from 'react-redux'
class ThongTinGame extends Component {
    render() {
        const {taiXiu,soBanThang,soBanChoi} = this.props
        return (
          <div className="py-4 mb-5">
            <h1>Bạn Chọn: {taiXiu?'Tài':'Xỉu'}</h1>
            <h1>
              Số bàn thắng: <span className="text-primary">{soBanThang}</span>
            </h1>
            <h1>
              Tổng số bàn chơi: <span className="text-danger">{soBanChoi}</span>{" "}
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