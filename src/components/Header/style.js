import styled from 'styled-components'
import logo from '../../static/img/logo.png'
import avatar from '../../static/img/avatar.jpeg'

export const HeaderWraper = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
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

export const Container = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`

export const Nav = styled.ul`
  height: 100%;
`
export const NavItem = styled.li`
  width: 64px;
  height: 100%;
  margin-right: 10px;
  float: left;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  &.active {
    color: #ea6f5a;
  }
  &.searchWraper {
    width: 175px;
    position: relative;
  }
  &.styleMode {
    width: 50px;
  }
  &.userWraper {
    width: 88px;
    position: relative;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 136px;
  height: 38px;
  border-radius: 38px;
  border: 0;
  outline: none;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  background: #eee;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -19px;
  &::placeholder {
    color: #999;
  }
`

export const UserBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url('${avatar}');
  background-size: contain;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #999;
    position: absolute;
    top: 50%;
    right: -12px;
  }
`
export const WriteBtn = styled.input.attrs({
  value: '写文章'
})`
  color: #fff;
  font-size: 15px;
  width: 100px;
  height: 40px;
  border: 0;
  outline: none;
  background: #ea6f5a;
  border-radius: 40px;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 20px;
  margin-top: -20px;
  &:hover {
    background: #ec6149;
  }
`