import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, Inlogin } from './style'

class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <Inlogin>
          <div className="group">
            <label htmlFor="username">用户名：</label>
            <input type="text" id="username" placeholder="请输入用户名" />
          </div>
          <div className="group">
            <label htmlFor="password">密&nbsp;&nbsp;&nbsp;码：</label>
            <input type="password" id="password" placeholder="请输入密码" />
          </div>
          <div className="group">
            <button>登录</button>
          </div>
        </Inlogin>
      </LoginWrapper>
    )
  }
}

const mapState = (state) => {
  return {

  }
}

const mapDispatch = (dispatch) => {
  return {

  }
}

export default connect(mapState, mapDispatch)(Login)