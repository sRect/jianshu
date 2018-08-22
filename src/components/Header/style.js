import styled from 'styled-components'
import logo from '../../static/logo.png'

export const Nav = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/',
  title: '简书'
})`
  display: block;
  width: 100px;
  height: 56px;
  background: url('${logo}');
  background-size: contain;
`