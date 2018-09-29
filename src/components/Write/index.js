import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends Component {
  render() {
    const { isLogin } = this.props;

    if (isLogin) {
      return <div>write page</div>
    } else {
      return <Redirect to="/login" />
    }
  }
}

const mapState = state => {
  return {
    isLogin: state.getIn(["loginReducer", "isLogin"])
  }
}

export default connect(mapState, null)(Write)
