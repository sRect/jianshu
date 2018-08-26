import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { HeaderWraper, Logo, Container, Nav, NavItem, NavSearch, SearchBtn, UserBtn, WriteBtn } from './style'

class Header extends Component {

  constructor() {
    super();

    this.state = {
      inputVal: '',
      foucused: false
    }
  }

  handleInputChange = (e) => {
    let inputVal = e.target.value;

    this.setState(() => ({
      inputVal
    }))
  }

  handleInputFocus = () => {
    this.setState(() => ({
      foucused: true
    }))
  }

  handleInputBlur = () => {
    this.setState(() => ({
      foucused: false
    }))
  }

  render() {
    return (
      <HeaderWraper className="clearfix">
        <Logo className="fl" />
        <Container className="clearfix">
          <Nav className="clearfix fl">
            <NavItem className="active">发现</NavItem>
            <NavItem>关注</NavItem>
            <NavItem>消息</NavItem>
            <NavItem className={this.state.foucused ? 'focused searchWraper' : 'searchWraper'}>
              <CSSTransition in={this.state.foucused} timeout={200} classNames='slide'>
                <NavSearch
                  value={this.state.inputVal}
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  onBlur={this.handleInputBlur}>
                </NavSearch>
              </CSSTransition>
              <CSSTransition in={this.state.foucused} timeout={200} classNames='slide'>
                <SearchBtn>
                  <i className="iconfont icon-zoom"></i>
                </SearchBtn>
              </CSSTransition>
            </NavItem>
          </Nav>
          <Nav className="clearfix fr">
            <NavItem className="fl styleMode">
              <i className="iconfont icon-Aa"></i>
            </NavItem>
            <NavItem className="fl userWraper">
              <UserBtn></UserBtn>
            </NavItem>
          </Nav>
        </Container>
        <WriteBtn className="fr">
          <i className="iconfont icon-pen"></i>
          写文章
        </WriteBtn>
      </HeaderWraper>
    )
  }
}

export default Header