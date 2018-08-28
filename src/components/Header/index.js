import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import store from '../../store'
import { getInputFoucused, getInputVal, handleInputChange, handleInputFocus, handleInputBlur } from '../../store/actions'
import { HeaderWraper, Logo, Container, Nav, NavItem, NavSearch, SearchBtn, UserBtn, WriteBtn } from './style'

class Header extends Component {
  render() {
    return (
      <HeaderWraper className="clearfix">
        <Logo className="fl" />
        <Container className="clearfix">
          <Nav className="clearfix fl">
            <NavItem className="active">发现</NavItem>
            <NavItem>关注</NavItem>
            <NavItem>消息</NavItem>
            <NavItem className={this.props.foucused ? 'focused searchWraper' : 'searchWraper'}>
              <CSSTransition in={this.props.foucused} timeout={200} classNames='slide'>
                <NavSearch
                  value={this.props.inputVal}
                  onChange={(e) => { this.props.handleInputChange(e.target.value) }}
                  onFocus={this.props.handleInputFocus}
                  onBlur={this.props.handleInputBlur}>
                </NavSearch>
              </CSSTransition>
              <CSSTransition in={this.props.foucused} timeout={200} classNames='slide'>
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

const mapStateToProps = (state) => {
  return {
    inputVal: state.headerReducer.inputVal,
    foucused: state.headerReducer.foucused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInputVal: () => {
      store.dispatch(getInputVal())
    },
    getInputFoucused: () => {
      store.dispatch(getInputFoucused())
    },
    handleInputChange: (val) => {
      store.dispatch(handleInputChange(val))
    },
    handleInputFocus: () => {
      store.dispatch(handleInputFocus())
    },
    handleInputBlur: () => {
      store.dispatch(handleInputBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)