import React, { Component } from 'react'
import { connect } from 'react-redux'
 class XucXac extends Component {
    render() {
      const {mangXucXac} = this.props
        return (
          <div className="d-flex">
          {mangXucXac.map((xucXac,idx)=>{
            return  <img key={idx} width="50px" src={xucXac.hinhAnh} />
          })}
          </div>
        );
    }
}
const mapStateToProps= (state) =>{
  return {mangXucXac: state.gameXucXacReducer.mangXucXac}
}
export default connect(mapStateToProps)(XucXac)
