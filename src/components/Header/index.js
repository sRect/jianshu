import React, { Component } from 'react'
import { HeaderWraper, Logo, Container, Nav, NavItem, NavSearch, UserBtn, WriteBtn } from './style'

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
            <NavItem className="searchWraper">
              <NavSearch></NavSearch>
            </NavItem>
          </Nav>
          <Nav className="clearfix fr">
            <NavItem className="fl styleMode">Aa</NavItem>
            <NavItem className="fl userWraper">
              <UserBtn></UserBtn>
            </NavItem>
          </Nav>
        </Container>
        <WriteBtn className="fr" />
      </HeaderWraper>
    )
  }
}

export default Header