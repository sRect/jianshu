import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom'
import { handleLogin } from '../../store/actions'
import { LoginWrapper, Inlogin } from './style'

class Login extends PureComponent {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = (event) => {
    let name = event.target.name,
      value = event.target.value,
      newState = {};

    newState[name] = value;

    // 异步设置state，打印state的实时数据，需要早setState的回调函数里打印才准确
    this.setState(() => {
      return {
        ...newState
      }
    })
  }

  render() {
    const { isLogin } = this.props;

    if (isLogin) {
      return <Redirect to="/" />
    } else {
      return (
        <LoginWrapper>
          <Inlogin>
            <div className="group">
              <label htmlFor="username">用户名：</label>
              <input type="text" id="username" name="username" placeholder="请输入用户名" value={this.state.username} onChange={this.handleInput} />
            </div>
            <div className="group">
              <label htmlFor="password">密&nbsp;&nbsp;&nbsp;码：</label>
              <input type="password" id="password" name="password" placeholder="请输入密码" value={this.state.password} onChange={this.handleInput} />
            </div>
            <div className="group">
              <button onClick={() => this.props.login(this.state)}>登录</button>
            </div>
          </Inlogin>
        </LoginWrapper>
      )
    }
  }

  // componentDidMount() {
  //   if (this.props.isLogin) {
  //     this.props.history.push({
  //       pathname: '/'
  //     })
  //   }
  // }
}

const mapState = (state) => {
  return {
    isLogin: state.getIn(["loginReducer", "isLogin"])
  }
}

const mapDispatch = (dispatch) => {
  return {
    login: (arg) => {
      if (arg.username && arg.password) {
        dispatch(handleLogin(arg))
      } else {
        alert("用户名/密码不可为空！")
      }

    }
  }
}

export default connect(mapState, mapDispatch)(withRouter(Login))