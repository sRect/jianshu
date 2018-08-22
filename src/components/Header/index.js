import React, { Component } from 'react'
import { Nav, Logo } from './style'

class Header extends Component {
  render() {
    return (
      <Nav>
        <Logo />
      </Nav>
    )
  }
}

export default Header